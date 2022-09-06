export function ensureWindow(props) {
  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }
}