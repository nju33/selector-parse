export default function selectorParse(selector) {
  const re = /([#.[]?[^#.\[]+)/g;
  const matches = selector.match(re);
  if (matches) {
    return traverse(matches);
  }
  return {};
}

function traverse(selectors) {
  const result = {};
  selectors.forEach(selector => {
    const detail = specity(selector);
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
    const splited = selector.slice(1, selector.length - 1).split('=');
    const attr = splited[0];
    const val = splited[1] || true;
    return {attr, val};
  }
  return {
    attr: null,
    val: selector
  };
}
