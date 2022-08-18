const testing = require('./reverse.js');

test('reserse testing', () => {
  expect(testing('hello')).toMatch(/olleh/);
});