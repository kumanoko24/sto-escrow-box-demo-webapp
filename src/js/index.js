import "core-js/stable";
import "regenerator-runtime/runtime";

import "../style/style.css";

import $ from "jquery";

$(function() {
  console.log("hello world");
});

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }
  });
}
