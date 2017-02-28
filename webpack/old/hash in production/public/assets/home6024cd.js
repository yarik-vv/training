var home =
webpackJsonp_name_([1],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.showMenu = function () {

  __webpack_require__.e/* require.ensure */(0).then((function (require) {
    var Menu = __webpack_require__(0).default;

    var menu = new Menu({
      title: "Комнаты дома",
      items: [{
        text: 'Детская',
        href: '#childroom'
      }, {
        text: 'Кухня',
        href: '#kitchen'
      }, {
        text: 'Гостиная',
        href: '#guestroom'
      }]
    });

    document.body.appendChild(menu.elem);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ })

},[3]);