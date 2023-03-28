const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const displayNumber = (array) => {
    array.map((number, index) => {
        console.log(number)
    })
}

displayNumber(array)