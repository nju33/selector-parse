/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/selector-parse.js
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.selectorParse = factory());
}(this, function () { 'use strict';

  function selectorParse(selector) {
    var re = /([#.[]?[^#.\[]+)/g;
    var matches = selector.match(re);
    if (matches) {
      return traverse(matches);
    }
    return {};
  }

  function traverse(selectors) {
    var result = {};
    selectors.forEach(function (selector) {
      var detail = specity(selector);
      if (detail.attr) {
        if (!result[detail.attr]) {
          result[detail.attr] = [];
        }
        result[detail.attr].push(detail.val);
      } else {
        result.tag = detail.val;
      }
    });

    if (!result.tag) {
      result.tag = 'div';
    }
    return result;
  }

  function specity(selector) {
    if (selector[0] === '#') {
      return {
        attr: 'id',
        val: selector.slice(1, selector.length)
      };
    } else if (selector[0] === '.') {
      return {
        attr: 'class',
        val: selector.slice(1, selector.length)
      };
    } else if (selector[0] === '[' && selector[selector.length - 1] === ']') {
      var splited = selector.slice(1, selector.length - 1).split('=');
      var attr = splited[0];
      var val = splited[1] || true;
      return { attr: attr, val: val };
    }
    return {
      attr: null,
      val: selector
    };
  }

  return selectorParse;

}));