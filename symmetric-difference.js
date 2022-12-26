/*

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements 
which are in either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. 
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
you must complete one operation at a time. 
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. 
The returned array must contain only unique values (no duplicates).

*/

function sym(args) {

    let difference = []

    for(let j = 0; j < [...arguments].length; j++) {
        difference = difference
        .filter(item => ![...arguments][j].includes(item))
        .concat([...arguments][j].filter(item => !difference.includes(item)))
    }

    // with duplicates values
    //return difference.sort((num1, num2) => num1 - num2)

    // without duplicates values
    return [... new Set(difference.sort((num1, num2) => num1 - num2))]
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))