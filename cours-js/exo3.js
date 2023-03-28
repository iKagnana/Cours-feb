//3
const withoutVoyelles = (characterChain) => {
    let vowel = ["a", "e", "i", "o", "u", "y"]
    let transformedChain = characterChain
    vowel.map((char, index) => {
        if (transformedChain.includes(char)) {
            transformedChain = transformedChain.replaceAll(char, "")
        }
    })
    return transformedChain

}

const testChar = "Bonjour, tout le monde. Comment allez-vous ?"
const result = withoutVoyelles(testChar)
console.log(result)