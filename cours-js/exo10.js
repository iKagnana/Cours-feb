const vowelInUpperCase = (characterChain) => {
    let vowel = ["a", "e", "i", "o", "u", "y"]
    let transformedChain = characterChain
    for (let i = 0; i < characterChain.length; i++) {
        if (!(vowel.includes(characterChain[i]))) {
            transformedChain = transformedChain.replaceAll(characterChain[i], characterChain[i].toUpperCase())
        }
    }
    return transformedChain
}

const testChar = "Bonjour, tout le monde. Comment allez-vous ?"
const result = vowelInUpperCase(testChar)
console.log(result)