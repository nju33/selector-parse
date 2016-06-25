const selectorParse = require('../dist/selector-parse.js');
const selector = `input
                  #name
                  .default.input__text
                  [placeholder=John][required]
                  [data-id=123][data-key=foo]
                  [src=//unsplash.it/500/?random]
                  {text}`;
const result = selectorParse(selector);
console.log(result);
