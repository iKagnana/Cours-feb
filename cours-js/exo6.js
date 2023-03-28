const arrayObject = [
    { name: "Bob", age: 13 },
    { name: "Gerard", age: 41 },
    { name: "Paul", age: 21 }
]

const getValueInObject = (arrayObject, property) => {
    let arrayProperty = []
    arrayObject.map((obj, index) => {
        arrayProperty.push(obj[`${property}`])
    })
    return arrayProperty
}

const result = getValueInObject(arrayObject, "name")
console.log(result)