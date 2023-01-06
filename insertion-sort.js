/*
This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until 
it is in sorted position. 
It continues iterating through the list and swapping new items backwards into the sorted portion 
until it reaches the end. 
This algorithm has quadratic time complexity in the average and worst cases.
*/

function insertionSort(arr) {

    const sorted = []
    
    arr.forEach(element => {

        sorted.push(element)

        for(let j = 0; j < sorted.length; j++) {
            for(let k = j + 1; k < sorted.length; k++) {
                if(sorted[j] > sorted[k]) {
                    let temp = sorted[j]
                    sorted[j] = sorted[k]
                    sorted[k] = temp
                }
            }        
        }
    });

    return sorted
}

console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))