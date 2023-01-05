/*
 Selection sort works by selecting the minimum value in a list and swapping it with the first value 
 in the list. It then starts at the second position, selects the smallest value in the remaining list, 
 and swaps it with the second element. 
 It continues iterating through the list and swapping elements until it reaches the end of the list. 
 Now the list is sorted. 
 Selection sort has quadratic time complexity in all cases.
*/

function selectionSort(array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){

            //let tiny = Math.min(...array.slice(j))
            
            if(Math.min(...array.slice(j)) < array[i]) {
                let temp = array[i]
                array[i] = Math.min(...array.slice(j))

                let tinyIndex = array.slice(j).findIndex(i => i === Math.min(...array.slice(j)))

                array[tinyIndex + j] = temp
            }
        }
    }

    return array
}

console.log(selectionSort([2, 2, 3, 1, 1, 4, 3]))