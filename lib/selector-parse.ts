interface Detail {
  attr: string;
  val: string;
}

export default function selectorParse(selector: string): any {
  const re = /([#.[]?[^#.\[]+)/g;
  const matches = selector.match(re);
  if (matches) {
    return traverse(matches);
  }
  return {};
}

function traverse(selectors: string[]): any {
  const result: any = {};

  selectors.forEach(selector => {
    const detail: Detail = specify(selector);
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

function specify(selector: string): Detail {
  if (selector[0] === '#') {
    const attr = 'id';
    const val = selector.slice(1, selector.length);
    return {attr, val};

  } else if (selector[0] === '.') {
    const attr = 'class';
    const val = selector.slice(1, selector.length);
    return {attr, val};

  } else if (selector[0] === '[' && selector[selector.length - 1] === ']') {
    const sliced: string = selector.slice(1, selector.length - 1);
    const splited: string[] = sliced.split('=');
    const attr = splited[0];
    const val = splited[1];
    return {attr, val};
  }

  return {
    attr: null,
    val: selector
  };
}
