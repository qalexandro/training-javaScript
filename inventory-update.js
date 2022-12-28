/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/

let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2) {
    
    let index
    let arr1Names = []
    let arr2Names = []

    arr1.forEach(item1 => {
        arr2.forEach(item2 => {
            if (item1[1] === item2[1]) {
                item1[0] += item2[0]
            }
        })
    })

    arr1.forEach(item => {
        arr1Names.push(item[1])
    })

    arr2.forEach(item => {
        arr2Names.push(item[1])
    })

    arr2Names.forEach(item => {
        if (arr1Names.indexOf(item) === -1) {
            index = arr2Names.indexOf(item)
            arr1.push(arr2[index])
        }
    })

    arr1.sort((previous, next) => {
        previous > next ? 1 : -1
    })
    return arr1
}

console.log(updateInventory(curInv, newInv))