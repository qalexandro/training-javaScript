/*
Given an array arr, find element pairs whose sum equal 
the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. 
Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element. 
For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] 
using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values.

Index 	0 	1 	2 	3 	4
Value 	7 	9 	11 	13 	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

*/

function sumArr(arr, sum) {
  
    let n = 1
    let m = 0
    const arrIndex = []
    
    for(let i = 0; i < arr.length - 1; i++) {

        while(n < arr.length - m) {

            if(arr[i] + arr[i+n] === sum) {
                arrIndex.push(arr.indexOf(arr[i]) +  arr.indexOf(arr[i+n]))
            }

            n++
        }
        n = 1
        m++
    }

    return arrIndex.reduce((num1, num2) => num1 + num2, 0)
}

function pairwise(arr, sum) {

    let pair = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum && !pair.includes(i) && !pair.includes(j)) {
                pair.push(i, j)
            }
        }
    }

    return pair.reduce((num1, num2) => num1 + num2, 0)
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
console.log(pairwise([1, 3, 2, 4], 4))