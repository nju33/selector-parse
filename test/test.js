const selectorParse = require('..');
const test = require('ava');

test('a', t => {
  const {tag} = selectorParse('a');
  t.is(tag, 'a');
});

test('a#id', t => {
  const {tag, id} = selectorParse('a#id');
  t.is(tag, 'a');
  t.is(id, 'id');
});

test('#id', t => {
  const {tag, id} = selectorParse('#id');
  t.is(tag, 'div');
  t.is(id, 'id');
});

test('#valid#invalid', t => {
  const {id} = selectorParse('#valid#invalid');
  t.is(id, 'valid');
});

test('.class', t => {
  const {className, classList} = selectorParse('a.class');
  t.is(className, 'class');
  t.same(classList, ['class']);
});

test('.btn.btn--large[class=icon__link]', t => {
  const {className, classList} = selectorParse('.btn.btn--large[class=icon__link]');
  t.is(className, 'btn btn--large icon__link');
  t.same(classList, ['btn', 'btn--large', 'icon__link']);
});

test('[test]', t => {
  const {test} = selectorParse('[test]');
  t.ok(test);
});

test('[test][test=false]', t => {
  const {test} = selectorParse('[test]');
  t.ok(test);
});

test('[data-id=1][data-lang=js]', t => {
  const {dataSet} = selectorParse('[data-id=1][data-lang=js]');
  t.is(Object.keys(dataSet).length, 2);
  t.is(dataSet.id, '1');
  t.is(dataSet.lang, 'js');
});

test(`{text}`, t => {
  const {innerText} = selectorParse('{text}');
  t.is(innerText, 'text');
});
