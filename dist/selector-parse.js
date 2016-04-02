/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/selector-parse.js
 */
"use strict";function selectorParse(t){var r=/([#.[]?[^#.\[]+)/g,e=t.match(r);return e?traverse(e):{}}function traverse(t){var r={};return t.forEach(function(t){var e=specify(t);e.attr?(r[e.attr]||(r[e.attr]=[]),r[e.attr].push(e.val)):r.tag=e.val}),r.tag||(r.tag="div"),r}function specify(t){if("#"===t[0]){var r="id",e=t.slice(1,t.length);return{attr:r,val:e}}if("."===t[0]){var r="class",e=t.slice(1,t.length);return{attr:r,val:e}}if("["===t[0]&&"]"===t[t.length-1]){var a=t.slice(1,t.length-1),l=a.split("="),r=l[0],e=l[1];return{attr:r,val:e}}return{attr:null,val:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=selectorParse;val;
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
