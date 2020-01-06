import { exportAllDeclaration } from "@babel/types";

/* Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]*/

describe('Fizzbuzz App', () => {
    test('number is divisible by 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    });
    test('number is divisible by 5', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });
    test('number is divisible by 3 and 5', () => {
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    });
    test('number is not divisble by 3 and or 5', () => {
        expect(fizzbuzz(4)).toBe(4);
    });
    
});


//My Solution

var fizzBuzz = function(n) {
    let result = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        result.push('FizzBuzz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else {
        result.push(i.toString());
      }
    }
  
    return result;
  };
  module.exports = fizzBuzz;