/* TD Part 

Le but de cet exercice est d'écrire une fonction simulant 
un lancer de dé (6).
Le nombre retourné par la fonction est évidemment choisi aléatoirement.

*/

function rollDice() {
    let de = Math.random();
    return Math.ceil(6 * de)
}

/* Testing Part */
let lastValue = 0;
let hasChanged = false;

function test() {
    for (let i = 0; i < 1000; i++) {
        let value = rollDice();
        if (value < 0 || value > 6 || !Number.isInteger(value)) {
            return false
        }
        if (lastValue !== value) {
            hasChanged = true
        }
        lastValue = value
    }
    return hasChanged
}

console.log(test() === true ? 'TD05 :: Passed' : 'TD05 :: Failed')
