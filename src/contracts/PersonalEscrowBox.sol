pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract ERC {
  function balanceOf (address) public view returns (uint256);
  function transfer (address, uint256) public returns (bool);
  function transferAndCall(address, uint256, bytes memory) public payable returns (bool);
}

contract FsTKerWallet {

  address public owner;

  ERC public userCertLedger;

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  constructor (address _userCertLedgerAddress) public {
    owner = msg.sender;
    userCertLedger = ERC(_userCertLedgerAddress);
  }

  function getETHBalance () public view returns (uint256) {
    return address(this).balance;
  }

  function getERCBalance (ERC erc) public view returns (uint256) {
    return erc.balanceOf(address(this));
  }

  function transferETH (address payable _to, uint256 _value) onlyOwner public returns (bool) {
    require(_to != address(this));
    _to.transfer(_value);
    return true;
  }

  function transferMoreETH (address payable _to, uint256 _value) onlyOwner payable public returns (bool) {
    require(_to != address(this));
    _to.transfer(_value);
    return true;
  }

  function transferERC (ERC erc, address _to, uint256 _value) onlyOwner public returns (bool) {
    require(_to != address(this));
    require(userCertLedger.balanceOf(_to) > 0);
    require(erc.transfer(_to, _value));
    return true;
  }

  function transferAndCallERC (ERC erc, address _to, uint256 _value, bytes memory _data) onlyOwner payable public returns (bool) {
    require(_to != address(this));
    require(userCertLedger.balanceOf(_to) > 0);
    require(erc.transferAndCall.value(msg.value)(_to, _value, _data));
    return true;
  }

  function callContract(address _to, bytes memory _data) onlyOwner public payable returns (bool) {
    require(_to != address(this));
    (bool s,) = _to.call.value(msg.value)(_data);
    require(s);
    return true;
  }

  function () external payable {}

}
