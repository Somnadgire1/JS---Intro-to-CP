const { add, greet, interpolate, nuller, objectFactory } = require('../index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('greet returns correct greeting', () => {
  expect(greet()).toBe("Will Smith's age is 54.");
});

test('interpolates correctly', () => {
  expect(interpolate(2, 3)).toBe('2 + 3 = 5');
  expect(interpolate(5, 2)).toBe('5 + 2 = 7');
});

test('nuller returns null', () => {
  expect(nuller()).toBe(null);
});

test('objectFactory creates correct object', () => {
  expect(objectFactory('Raj', 26)).toEqual({ Raj: 26 });
  expect(objectFactory('Vijay', 24)).toEqual({ Vijay: 24 });
});
