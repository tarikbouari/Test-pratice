const helloo = require('./index.js');

test('counter Character ', () => {
  expect(helloo('hello')).not.toMatch(/4/);
});
