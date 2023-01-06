/*
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. 
In this method, a pivot value is chosen in the original array. 
The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
This continues until the base case of an empty or single-item array is reached, which we return. 
The unwinding of the recursive calls return us the sorted array.
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function arrayPartition(array, low, high) {
    
    let pivot = array[high]
    let i = low - 1
    for(let j = low; j <= high - 1; j++) {
        if(array[j] < pivot) {
            i = i + 1
            swap(array, i, j)
        }
    }

    swap(array, i + 1, high)
    return i + 1
}

function recursiveSort(array, low, high) {

    if(low < high) {
        let pi = arrayPartition(array, low, high)
        recursiveSort(array, low, pi - 1)
        recursiveSort(array, pi + 1, high)
    }
}

function quickSort(array) {

    let low = 0
    let high = array.length - 1

    recursiveSort(array, low, high)

    return array
}

console.log(quickSort([3, 9, 8, 10, 2, 1, 44, 5, 67, 34, 6, 8]))