/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/selector-parse.js
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    function selectorParse(selector) {
        var re = /([#.[]?[^#.\[]+)/g;
        var matches = selector.match(re);
        if (matches) {
            return traverse(matches);
        }
        return {};
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = selectorParse;
    function traverse(selectors) {
        var result = {};
        selectors.forEach(function (selector) {
            var detail = specify(selector);
            if (detail.attr) {
                if (!result[detail.attr]) {
                    result[detail.attr] = [];
                }
                result[detail.attr].push(detail.val);
            }
            else {
                result.tag = detail.val;
            }
        });
        if (!result.tag) {
            result.tag = 'div';
        }
        return result;
    }
    function specify(selector) {
        if (selector[0] === '#') {
            var attr = 'id';
            var val = selector.slice(1, selector.length);
            return { attr: attr, val: val };
        }
        else if (selector[0] === '.') {
            var attr = 'class';
            var val = selector.slice(1, selector.length);
            return { attr: attr, val: val };
        }
        else if (selector[0] === '[' && selector[selector.length - 1] === ']') {
            var sliced = selector.slice(1, selector.length - 1);
            var splited = sliced.split('=');
            var attr = splited[0];
            var val = splited[1];
            return { attr: attr, val: val };
        }
        return {
            attr: null,
            val: selector
        };
    }
});
