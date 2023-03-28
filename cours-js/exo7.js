const sortedNumber = (arrayNumber) => {
    arrayNumber.sort((a, b) => b - a)
    return arrayNumber
}

const arrayNumber = [2, 3, 14, 6, 304, 56, 1]
const result = sortedNumber(arrayNumber)
console.log(result)