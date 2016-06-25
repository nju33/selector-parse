# Selector Parse

[![Build Status](https://travis-ci.org/totora0155/selector-parse.svg?branch=master)](https://travis-ci.org/totora0155/selector-parse)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm version](https://badge.fury.io/js/selector-parse.svg)](https://badge.fury.io/js/selector-parse)

Selector parser

## Usage

in Node.js

```
npm i selector-parse
```

in browser

```html
<script src="selector-parse.js"></script>
```

## Browser

IE >= 9, *

## Example

```js
const selectorParse = require('selector-parse.js');
const selector = `input
                  #name
                  .default.input__text
                  [placeholder=John][required]
                  [data-id=123][data-key=foo]
                  {text}`;
const result = selectorParse(selector);
console.log(result);
```

output like this

```js
{ tag: 'input',
  id: 'name',
  placeholder: 'John',
  required: true,
  text: 'text',
  dataSet: { id: '123', key: 'foo' },
  classList: [ 'default', 'input__text' ],
  className: 'default input__text' }
```
