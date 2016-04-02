import selectorParse from '..';
import test from 'ava';

test('#id', t => {
  const result = selectorParse('#id');
  t.is(result.tag, 'div', 'Not equal result.tag is \'div\'');
  t.same(result.id, ['id'], 'Not equal result.id is [\'id\']');
});

test('a.class', t => {
  const result = selectorParse('a.class');
  t.is(result.tag, 'a', 'Not equal result.tag is \'a\'');
  t.same(result.class, ['class'], 'Not equal reuslt.class is [\'class\']');
});

test('[test]', t => {
  const result = selectorParse('[test]');
  t.same(result.test, [true], 'Not equal result.test is [true]');
});

test('[data-id=1][data-lang=js]', t => {
  const result = selectorParse('[data-id=1][data-lang=js]');
  t.same(result['data-id'], ['1'], 'Not equal result[\'data-id\'] is [\'1\']');
  t.same(result['data-lang'], ['js'], 'Not equal result[\'data-lang\'] is [\'js\']');
});
