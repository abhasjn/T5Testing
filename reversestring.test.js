const reverseString = require('./reversestring');

// Checking if the function is defined
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

// Checking if the string reverses
test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

// Checking if it works for upper case as well as we have set everything to lower case.
test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});