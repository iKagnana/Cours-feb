const numberVowel = (characterChain) => {
    let compteur = 0
    let vowel = ["a", "e", "i", "o", "u", "y"]
    for (let i = 0; i < characterChain.length; i++) {
        if (vowel.includes(characterChain[i])) {
            compteur += 1
        }
    }
    return compteur
}

const testChar = "Bonjour, tout le monde. Comment allez-vous ?"
const result = numberVowel(testChar)
console.log(result)