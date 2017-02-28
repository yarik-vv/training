var about =
webpackJsonp_name_([2],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.showMenu = function () {

  __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) {
    var Menu = __webpack_require__(0).default;

    var menu = new Menu({
      title: "О сайте 2",
      items: [{
        text: 'Кто придумал?',
        href: '#think'
      }, {
        text: 'Кто сделал?',
        href: '#do'
      }, {
        text: 'Кто оплатил?',
        href: '#pay'
      }]
    });

    document.body.appendChild(menu.elem);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ })
],[1]);