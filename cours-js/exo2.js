//2
const getBiggerNumber = (array) => {
    let biggerNumber = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggerNumber) {
            biggerNumber = array[i]
        }
    }
    return biggerNumber
}

const arrayNumber = [1, 5, 10, 67, 3]

const bigNumber = getBiggerNumber(arrayNumber)
console.log(bigNumber)