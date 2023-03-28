const vowelInUpperCase = (characterChain) => {
    let vowel = ["a", "e", "i", "o", "u", "y"]
    let transformedChain = characterChain
    vowel.map((char, index) => {
        if (transformedChain.includes(char)) {
            transformedChain = transformedChain.replaceAll(char, char.toUpperCase())
        }
    })
    return transformedChain
}

const testChar = "Bonjour, tout le monde. Comment allez-vous ?"
const result = vowelInUpperCase(testChar)
console.log(result)