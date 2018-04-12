/* TD01 CSV Parsing

Le but de cet exercice est de transformer une chaine de texte en
un tableau d'objets javascript contenants les informations : title, author et date.

Attention : La première ligne n'est pas prise en compte dans votre tableau final !

Exemple :
"Title;Author;Date\nAnimal Farm;George Orwell;1945" => [{author: 'George Orwell', title: 'Animal Farm', date: 1945}]
*/

/* TD Part */
function parseCSV(string) {
    var arrayOfStrings = string.split("\n");
    var sliceOfArray = arrayOfStrings.slice(1, 4);
    var arrayOfValue = [];

    for (var i = 0; i < sliceOfArray.length; i++) {
        var theTable = sliceOfArray[i].split(";");
        var object = {
            title: theTable[0],
            author: theTable[1],
            date: Number(theTable[2])
        };

        arrayOfValue.push(object);
    }
    console.log(arrayOfValue);

    return arrayOfValue;
}

/* Testing Part */
var csv = "Title;Author;Date\n" +
    "Animal Farm;George Orwell;1945\n" +
    "The Hitchhiker's Guide to the Galaxy;Douglas Adams;1985\n" +
    "Transmetropolitain;Warren Ellis;1997";

var parsed = parseCSV(csv);
if (parsed[0].title === 'Animal Farm' &&
    parsed[1].author === 'Douglas Adams' &&
    parsed[2].date === 1997) {
    console.log('TD01 :: Success')
} else {
    console.log('TD01 :: Failed')
}
