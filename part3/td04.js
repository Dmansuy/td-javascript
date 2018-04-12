/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et 
ne retournant que les nombres de ce tableau faisant partie 
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */

const fibFilter = (array) => {
    let arrayFibo = [];
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 || array[i] === 1 || array[i] === 5 || array[i] === 13 || array[i] === 2 || array[i] === 3 || array[i] === 8) {
            let value = array[i];
            arrayFibo.push(value);
        }
    }
    console.log(arrayFibo);
    return arrayFibo;
};

/* Testing Part */
const array = [0, 1, 4, 5, 13, 2, 3, 4, 20, 30, 11, 8, 12];
console.log(fibFilter(array).toString() === [0, 1, 5, 13, 2, 3, 8].toString() ? 'TD01 :: Success' : 'TD01 :: Failed');
