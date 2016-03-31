# Selector Parse

[![Build Status](https://travis-ci.org/totora0155/selector-parse.svg?branch=master)](https://travis-ci.org/totora0155/selector-parse)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm version](https://badge.fury.io/js/selector-parse.svg)](https://badge.fury.io/js/selector-parse)

## Usage

in Node.js

```
npm i selector-parse
```

in browser

```
<script src="selector-parse.js"></script>
<!-- <script src="selector-parse.min.js"></script> -->
```

## Browser

IE >= 9, *

## Example

```
const selectorParse = require('selector-parse');

const selector = 'a#btn.box__a.icon__link[role=button][data-bool]';
const result = selectorParse(selector);

console.log(result);
```

output

```
{ tag: 'a',
  id: [ 'btn' ],
  class: [ 'box__a', 'icon__link' ],
  role: [ 'button' ],
  'data-bool': [ true ] }
```
