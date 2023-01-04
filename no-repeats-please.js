/*
Return the number of total permutations of the provided string 
that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

function permAlone(str) {

    let getPermutations = (str) => {

        if(str.length < 2) {
            return str
        }
    
        let permutations = []
    
        for(let i = 0; i < str.length; i++) {
    
            let char = str[i]
            let rest = str.slice(0, i) + str.slice(i + 1, str.length)
            
            for(let permutation of getPermutations(rest)) {
                permutations.push(char + permutation)
            }
        }
        
        // filter the arrays with two or more consecutive letters
        
        return permutations.filter(item => !(/([a-z])\1+/g.test(item)))
    }

    return getPermutations(str).length
}

console.log(permAlone('aab'));