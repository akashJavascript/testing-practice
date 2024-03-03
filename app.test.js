import { template } from '@babel/core';
import { capitalize } from './app';
import { reverseString } from './app';
import { calcuator } from './app';
import { caesarCipher } from './app';
import {analyzeArray} from './app';
// test('capitlizes 1 letter', () => {
//   expect(capitalize('a')).toBe('A');
// });

// test('capitlizes 1 word', () => {
//   expect(capitalize('hello')).toBe('Hello');
// });

// test('capitlizes 1 sentence', () => {
//   expect(capitalize('hello world')).toBe('Hello world');
// });

// test('reverses 1 letter', () => {
//   expect(reverseString('a')).toBe('a');
// });

// test('reverses 1 word', () => {
//   expect(reverseString('hello')).toBe('olleh');
// });

// test('reverses 1 sentence', () => {
//   expect(reverseString('hello world')).toBe('dlrow olleh');
// });

// test('adds 2 numbers', () => {
//   expect(calcuator.subtract(1,2)).toBe(3);
// });

// test('subtracts 2 numbers',() => {
//   expect(calcuator.subtract(1,2)).toBe(-1);
// })
// test('multiplies 2 numbers',() => {
//   expect(calcuator.multiply(1,2)).toBe(2);
// });

// test('divides 2 numbers',() => {
//   expect(calcuator.divide(1,2)).toBe(0.5);
// });

// test('one phrase', () => {
//   expect(caesarCipher('hello', 1)).toBe('ifmmp');
// });

// test('keeping the same case', () => {
//   expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
// });

// test('casear cipher wrapping', () => {
//   expect(caesarCipher('z', 1)).toBe('a');
// });

// test('keeping punctuation', () => {
//   expect(caesarCipher('hello!', 1)).toBe('ifmmp!');
// });

test('analyze array returns average', () => {
  expect(analyzeArray([1,2,3,4,5]).average).toBe(3);
});

test('analyze array returns min', () => {
  expect(analyzeArray([1,2,3,4,5]).min).toBe(1);
});

test('analyze array returns max', () => {
  expect(analyzeArray([1,2,3,4,5]).max).toBe(5);
});

test('analyze array returns length', () => {
  expect(analyzeArray([1,2,3,4,5]).length).toBe(5);
});