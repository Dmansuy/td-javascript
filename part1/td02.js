/* TD02 

Le but de cet exercice est de créer une ExecutionQueue.

C'est une pile d'éxecution a laquelle on pourra ajouter des fonctions à executer.

Celles-ci ne seront pas directement executées, seulement lorsque la méthode execute

de l'ExecutionQueue sera appellée. 

Les retours des fonctions executées seront retournées dans un tableau ordonné à l'appel 
de la méthode execute().

Il sera également possible de connaître le nombre de fonctions dans la queue en utilisant la méthode size().

Exemple :

var queue = new ExecutionQueue

queue.size() // 0

queue.push(function() {return 'foo'})

queue.size() // 1

queue.execute() // ['foo']

*/

/* TD Part */
function ExecutionQueue() {

    let functions = [];

    return {
        push: function (param) {
            functions.push(param);
        },
        execute: function () {
            let output = [];

            while (functions.length) {
                let f = functions.shift();
                output.push(f())
            }
            // for (var i = 0; i < functions.length; i++) {
            //     output.push(functions[i]())
            // }
            return output;
        },
        size: function () {
            return functions.length;

        }
    };
    return queue;
}

/* Testing Part */
let queue = new ExecutionQueue();
queue.push(function () {
    return 'test'
});
console.log('## After function test : ' + queue);

queue.push(function () {
    return 'OK'
});
console.log('## After function Ok : ' + queue);

if (queue.execute().join() === 'test,OK' && queue.size() === 0) {
    console.log('TD02 :: Success')
} else {
    console.log('TD02 :: Failed')
}
