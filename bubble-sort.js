/*
The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' 
unsorted values towards the end, iterating through the array until it is completely sorted. 
It does this by comparing adjacent items and swapping them if they are out of order. 
The method continues looping through the array until no swaps occur at which point the array is sorted.
 */

function bubbleSort(array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            
            if(array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }    
        }
    }

    return array;
}

console.log(bubbleSort([4, 2, 3, 1]))