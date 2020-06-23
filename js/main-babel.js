"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var navigationMain = document.querySelector('.navigation__list');
var navigationToggle = document.querySelector('.navigation__toggle');
var header = document.querySelector('.header');
var form = document.querySelector('#form');
var sendForm = document.querySelector('.contacts__form-button');
var formFields = document.querySelectorAll('.contacts__form-input');
var successMessage = document.querySelector('.contacts__form-success');
var successToggle = document.querySelector('.contacts__form-success-toggle');
var upButton = document.querySelector('.up-button');
var projectsItems = document.querySelectorAll('.projects__item');
var projectsItemDescriptions = document.querySelectorAll('.projects__item-description');

var navToggle = function navToggle(x, y, z) {
  y.onclick = function (a) {
    a.preventDefault();
    z.classList.toggle('header--background');

    if (y.classList.contains('navigation__toggle--open')) {
      y.classList.remove('navigation__toggle--open');
      y.classList.remove('animate-left');
      y.classList.add('navigation__toggle--close');
      y.classList.add('animate-right-toggle');
    } else {
      y.classList.remove('navigation__toggle--close');
      y.classList.remove('animate-right-toggle');
      y.classList.add('navigation__toggle--open');
      y.classList.add('animate-left');
    }

    if (x.classList.contains('navigation__list--closed')) {
      x.classList.remove('navigation__list--closed');
      x.classList.remove('animate-left');
      x.classList.add('navigation__list--opened');
      x.classList.add('animate-right-navigation');
    } else {
      x.classList.remove('navigation__list--opened');
      x.classList.remove('animate-right-navigation');
      x.classList.add('navigation__list--closed');
      x.classList.add('animate-left');
    }
  };
};

navToggle(navigationMain, navigationToggle, header);

successToggle.onclick = function () {
  successMessage.classList.remove('contacts__form-success--show');
};

window.onscroll = function () {
  if (window.pageYOffset > 700) {
    upButton.classList.add('up-button--show');
  } else {
    upButton.classList.remove('up-button--show');
  }

  ;
};

var clearSection = function clearSection() {
  var _iterator = _createForOfIteratorHelper(projectsItemDescriptions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var projectsItemDescription = _step.value;
      projectsItemDescription.classList.remove('projects__item-description--show');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
};

var _iterator2 = _createForOfIteratorHelper(projectsItems),
    _step2;

try {
  var _loop = function _loop() {
    var projectsItem = _step2.value;
    var itemDescription = projectsItem.querySelector('.projects__item-description');

    projectsItem.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      clearSection();
      itemDescription.classList.toggle('projects__item-description--show');
    };

    itemDescription.onclick = function (event) {
      event.stopPropagation();
      itemDescription.classList.remove('projects__item-description--show');
    };
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

document.onclick = function () {
  clearSection();
};