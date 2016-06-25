export default function selectorParse(selector) {
  const re = /([#.[{]?[^#.\[{]+)/g;
  const matches = selector.match(re);
  if (matches) {
    return traverse(matches);
  }
  return {};
}

function traverse(selectors) {
  const result = {};
  selectors.forEach(selector => {
    const detail = specity(selector.trim());
    if (detail.attr) {
      if (result[detail.attr] && detail.attr === 'class') {
        result.class.push(detail.val);
      } else if (detail.attr === 'class') {
        result.class = [detail.val];
      } else if (!result[detail.attr]) {
        result[detail.attr] = detail.val;
      }
    } else {
      result.tag = detail.val;
    }
  });

  result.dataSet = Object.keys(result)
    .filter(attr => attr.indexOf('data-') === 0)
    .reduce((dataSet, attr) => {
      dataSet[attr.substr(5)] = result[attr];
      delete result[attr];
      return dataSet;
    }, {});

  if (!result.tag) {
    result.tag = 'div';
  }
  if (result.class) {
    result.className = result.classList = result.class;
    result.className = result.className.join(' ');
    delete result.class;
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
  } else if (selector[0] === '{' && selector[selector.length - 1] === '}') {
    return {
      attr: 'innerText',
      val: selector.match(/{(.*)}/)[1]
    };
  }
  return {
    attr: null,
    val: selector
  };
}
