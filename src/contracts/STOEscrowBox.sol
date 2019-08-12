pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract STOEscrowBox {

    address public authCertVoucherLedgerAddress;
    address public userCertVoucherLedgerAddress;

    struct Vote {
        bool _created;
        bool _passed;
        bool _executed;
        bool _cancelled;
        uint256 _voteNum;
        address _ledger;
        uint256 _value;
        address _from;
        address _to;
        bytes _calldata;
    }

    mapping(bytes32 => Vote) public voteMap;

    uint256 public authNum;

    event ProposeCreated (bytes32 indexed _id);
    event ProposePassed (bytes32 indexed _id);
    event ProposeExecuted (bytes32 indexed _id);
    event ProposeCancelled (bytes32 indexed _id);

    constructor(address _authCertVoucherLedgerAddress, address _userCertVoucherLedgerAddress) public {
        authNum = 1;
        authCertVoucherLedgerAddress = _authCertVoucherLedgerAddress;
        userCertVoucherLedgerAddress = _userCertVoucherLedgerAddress;
    }

    function setAuthNum (uint256 _authNum) public returns (bool) {
        require(msg.sender == address(this));

        authNum = _authNum;

        return true;
    }

    function setAuthCertVoucherLedgerAddress (address _addr) public returns (bool) {
        require(msg.sender == address(this));

        authCertVoucherLedgerAddress = _addr;

        return true;
    }

    function setUserCertVoucherLedgerAddress (address _addr) public returns (bool) {
        require(msg.sender == address(this));

        userCertVoucherLedgerAddress = _addr;

        return true;
    }

    function getLedgerBalanceHumanNumber (address _ledgerAddress, address _holderAddress) public view returns (uint256) {
        (bool _success, bytes memory _returnData1) = _ledgerAddress.staticcall(
            abi.encodeWithSelector(
                bytes4(keccak256(bytes("balanceOf(address)"))),
                _holderAddress));

        require(_success);

        (uint256 _balance) = abi.decode(_returnData1, (uint256));

        return _balance;
    }

    function encodePropose (uint256 _value, address _from, uint256 _mode, bytes memory _data) public pure returns (bytes memory) {
        return abi.encodeWithSelector(
            bytes4(keccak256(bytes("propose(uint256,address,uint256,bytes)"))),
            _value, _from, _mode, _data);
    }

    function decodePropose (bytes memory __data) public pure returns (uint256 _value, address _from, uint256 _mode, bytes memory _data) {
        (_value, _from, _mode, _data) = abi.decode(__data, (uint256, address, uint256, bytes));
    }

    function encodeCallData (bytes32 _voteHash, address _to, bytes memory _calldata) public pure returns (bytes memory) {
        return abi.encode(_voteHash, _to, _calldata);
    }

    function decodeCallData (bytes memory _data) public pure returns (bytes32 _voteHash, address _to, bytes memory _calldata) {
        (_voteHash, _to, _calldata) = abi.decode(_data, (bytes32, address, bytes));
    }

    // anyone holds userCert proposes
    function mode_0 (address _ledger, uint256 _value, address _from, bytes memory _data) private returns (bool) {
        require(
            getLedgerBalanceHumanNumber(userCertVoucherLedgerAddress, _from) > 0 ||
            getLedgerBalanceHumanNumber(authCertVoucherLedgerAddress, _from) > 0);

        (bytes32 _voteHash, address _to, bytes memory _calldata) = abi.decode(_data, (bytes32, address, bytes));

        Vote storage _voteObj = voteMap[_voteHash];

        require(_voteObj._created == false);

        _voteObj._created = true;
        _voteObj._voteNum = 0;
        _voteObj._ledger = _ledger;
        _voteObj._value = _value;
        _voteObj._from = _from;
        _voteObj._to = _to;
        _voteObj._calldata = _calldata;

        emit ProposeCreated(_voteHash);

        return true;
    }

    // auth accept
    function mode_1 (address _ledger, uint256 _value, address _from, bytes memory _data) private returns (bool) {
        require(getLedgerBalanceHumanNumber(authCertVoucherLedgerAddress, _from) > 0);

        (bytes32 _voteHash,,) = abi.decode(_data, (bytes32, address, bytes));

        Vote storage _voteObj = voteMap[_voteHash];

        require(_voteObj._voteNum <= authNum && _voteObj._passed == false && _voteObj._cancelled == false);
        _voteObj._voteNum++;

        if (_voteObj._voteNum == authNum) {
            (bool success1,) = _voteObj._to.call(_voteObj._calldata);
            require(success1);

            _voteObj._passed = true;
            emit ProposePassed(_voteHash);

            (bool success2,) = address(this).call(
                abi.encodeWithSelector(
                    bytes4(keccak256(bytes("finalise(bytes32)"))),
                    _voteHash));
            require(success2);
        }

        return true;
    }

    // auth reject or timeout
    function mode_2 (address _ledger, uint256 _value, address _from, bytes memory _data) private returns (bool) {
        require(getLedgerBalanceHumanNumber(authCertVoucherLedgerAddress, _from) > 0);

        (bytes32 _voteHash,,) = abi.decode(_data, (bytes32, address, bytes));

        Vote storage _voteObj = voteMap[_voteHash];

        require(_voteObj._voteNum <= authNum && _voteObj._passed == false && _voteObj._cancelled == false);

        (bool success1,) = _voteObj._ledger.call(
            abi.encodeWithSelector(
                bytes4(keccak256(bytes("transfer(address,uint256)"))),
                _voteObj._from, _voteObj._value));
        require(success1);

        (bool success2,) = address(this).call(
            abi.encodeWithSelector(
                bytes4(keccak256(bytes("cancel(bytes32)"))),
                _voteHash));
        require(success2);

        return true;
    }

    function propose (uint256 _value, address _from, uint256 _mode, bytes calldata _data) external returns (bool) {
        if (_mode == 0) {
            require(mode_0(msg.sender, _value, _from, _data));
        }

        return true;
    }

    function negotiate (uint256 _value, address _from, uint256 _mode, bytes calldata _data) external returns (bool) {
        if (_mode == 1) {
            require(mode_1(msg.sender, _value, _from, _data));
        }

        if (_mode == 2) {
            require(mode_2(msg.sender, _value, _from, _data));
        }

        return true;
    }

    function finalise (bytes32 _voteHash) external returns (bool) {
        require(msg.sender == address(this));
        Vote storage _voteObj = voteMap[_voteHash];
        _voteObj._executed = true;
        emit ProposeExecuted(_voteHash);
        return true;
    }

    function cancel (bytes32 _voteHash) external returns (bool) {
        require(msg.sender == address(this));
        Vote storage _voteObj = voteMap[_voteHash];
        _voteObj._cancelled = true;
        emit ProposeCancelled(_voteHash);
        return true;
    }
}
