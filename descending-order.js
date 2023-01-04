function descendingOrder(num) {
    return Number([...String(num)].sort((num1, num2) => num2 - num1).join(""))
}

console.log(descendingOrder(23451))