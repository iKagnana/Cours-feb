const numberAsLetter = (number) => {
    let dizaine
    let unit
    const unitArray = ["one", "two", "tree", "four", "five", "six", "seven", "eight", "nine"]
    const dizaineArray = ["ten", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const aboveDizaine = ["twelve", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"]

    unit = number % 10
    dizaine = Math.floor(number / 10)

    if (number >= 10 && number < 20) {
        return dizaineArray[unit - 1]
    } else if (number >= 20) {
        if (unit !== 0) {
            return aboveDizaine[dizaine - 2] + "-" + unitArray[unit - 1]
        } else {
            return aboveDizaine[dizaine - 2]
        }

    }
}

const result = numberAsLetter(34)
console.log(result)