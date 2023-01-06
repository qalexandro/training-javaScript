/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {

    const numbers = [];

    for(let i = 1; i < number; i++) {
        numbers.push(i);
    }

    return numbers
                .filter(item => item % 3 === 0 || item % 5 === 0)
                .reduce((sum1, sum2) => sum1 + sum2, 0)
  }
  
console.log(multiplesOf3and5(1000));