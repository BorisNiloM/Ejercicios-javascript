//================================================================================================================================
//=====1)We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.
//================================================================================================================================

//mi solucion
function sumAll(arr) {
    let aux = [];
    let arrAux = aux.concat(arr).sort(function(a, b) { return a - b });
    let aux2 = [];
    for (let i = arrAux[0]; i <= arrAux[1]; i++) {
        aux2.push(i);
    }
    return aux2.reduce((total, a) => total + a)
}

console.log(sumAll([1, 4]));

//solucion mas corta
// **** ...arr es el operador spread, que expande el arreglo donde son esperados cero o mas argumentos
// **** Math.min(1,2,3,4), busca el menor valor de una lista dada ( no permite arreglos en su argumento). Lo mismo para Math.max


function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));

//===========================================================================================================================================================================================
//=====2)Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
//You can return the array with its elements in any order.
//===========================================================================================================================================================================================

//mi solucion
function diffArray(arr1, arr2) {
    return arr1.filter((elem) => arr2.indexOf(elem) < 0).concat(arr2.filter((elem) => arr1.indexOf(elem) < 0));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//otra solucion
// **** includes() determina si un array contiene un elemento en especifico. Devuelve true si es asi o false si no
function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//=====================================================================================================================================
//=====3)You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
//Remove all elements from the initial array that are of the same value as these arguments.
//You have to use the arguments object.
//=====================================================================================================================================
//MI SOLUCION
// ***** arguments contiene todos los argumentos enviados a la funcion

function destroyer(arr) {
    let aux = [];
    for (let i = 1; i < arguments.length; i++) {
        aux.push(arguments[i])
    }
    return arguments[0].filter((elem) => aux.indexOf(elem) < 0)
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Otra solucion
// **** el metodo Array.from(arg) crea un arreglo a partir de un objeto con propiedad length o con objetos iterables
// **** slice(1,4) crea un nuevo arreglo a partir del indice 1, hasta el indice 4 sin incluirlo

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}

//============================================================================================================================================================================
//=====4)Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
//Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
//and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value,
//that was passed on as the second argument.
//============================================================================================================================================================================

// **** Object.keys(obj) obtiene los nombres de las propiedades del objeto (arr)
// **** obj.hasOwnProperty(keys) verifica que las propiedades en keys existan en obj. Si es asi envia true, sino false

function whatIsInAName(collection, source) {
    // What's in a name?
    // Only change code below this line
    let srcKeys = Object.keys(source);
    return collection.filter(function(obj) {
        for (let i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false
            }
        }
        return true
    })
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

//============================================================================================
//=====5)Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//============================================================================================

//Mi solucion jodidamente larga ( ejemplo de algo que no se debe hacer xD)
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let regex = /[A-Z]|\s|\_/;
    let arr = str.split("");

    let cap = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            cap.push(0);
        } else if (regex.exec(arr[i])) {
            cap.push(i)
        }
    }

    let aux = [];
    for (let a = 0; a < cap.length; a++) {
        if ((cap[a] + 1) !== cap[a + 1]) {
            aux.push(str.slice(cap[a], cap[a + 1]).trim());
        } else {
            continue;
        }

    }
    return aux.join("-").toLowerCase();
}
console.log(spinalCase("Teletubbies say Eh-oh"));

//===Solucion basica
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
    // **** expresion regular en la cual busca espacio en blanco(\s), una o mas veces (+) o (|), guion bajo(_), una o mas veces+. Hace una
    //busqueda global(g), en la cual no se detiene en el primer caso exitoso

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // **** replace(pal, otrapal), remplaza pal ( que puede ser una palabra o regex) por otrapal. En este ejemplo $1 $2 significa que recuerda el grupo de busqueda () 1 y 2
    // y los separa
    // **** Separa una palabra que empieze con minusculas y tenga mayusculas entremedio como aasdAsdD => aasd Asd D

    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
    // **** reemplaza los espacio en blanco o los guiones bajos, por guiones medios
}

// test here
spinalCase('This Is Spinal Tap');

//===Solucion mas corta

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
        // **** split(algo) separa un string, siendo el criterio de separacion algo. Algo puede ser un caracter, espacio vacio o un regex
        // **** /\s|_|(?=[A-Z])/  busca un espacio en blanco, o un guion bajo  o algo seguido inmediatamente de una letra en mayusculas
        // **** lo junta mediante join("-") separados por -
}
console.log(spinalCase("Teletubbies say Eh-oh"));

//=====================================================================================================================================
//=====6)Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
//Input strings are guaranteed to be English words in all lowercase.
//=====================================================================================================================================

function translatePigLatin(str) {
    let regex = /^[^aeiou]{1,}/
    if (regex.test(str)) {
        return str.replace(regex, "") + regex.exec(str)[0] + "ay";
    } else {
        return str + "way"
    }
}
console.log(translatePigLatin("glover"));

//==============================================================================================================
//=====7)Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note
//Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
//==============================================================================================================

function pairElement(str) {
    let aux = [];
    str.split("").map(elem => {
        switch (elem) {
            case "G":
                aux.push([elem, "C"]);
                break;
            case "C":
                aux.push([elem, "G"])
                break;
            case "T":
                aux.push([elem, "A"])
                break;
            case "A":
                aux.push([elem, "T"])
                break;
            default:
                break;
        }
    });
    return aux
}
console.log(pairElement("ATCGA"));

//========================================================================
//=====8)Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.
//========================================================================

//===mi solucion
function fearNotLetter(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let index = alpha.search(str[0])

    for (let i = 0; i < str.length; i++) {
        if (alpha.slice(index)[i] === str[i]) {
            continue;
        } else {
            return alpha.slice(index)[i];
        }
    }
    return undefined
}

console.log(fearNotLetter("abcdefghjklmno"));

//===solucion avanzada
// **** otra forma de crear un regex es con el constructor new RegExp(regex,flag). Mas conveniente si regex es dinamica
// **** String.fromCharCode(num) trasmforma el codigo unicode (num) a letra
// **** charCodeAt(index) transforma a codigo unicode, la letra en el indice correspondiente de la cadena
// **** str.match(regex) retorna las coincidencias correspondientes con el regex

function fearNotLetter(str) {
    var allChars = '';

    var notChars = new RegExp('[^' + str + ']', 'g'); //busca todas las coincidencias que no se correspondad con las letras en str


    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)

        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");

//============================================================================================================================================
//=====9)Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//Check the assertion tests for examples.
//============================================================================================================================================

// **** forEach() es lo mismo que un for, pero para recorrer colecciones; for es para un numero dado de iteraciones (es mas rapido que un forEach o un map).
// **** map() esta pensado para operar una coleccion y devolver una nueva a partir de esta

function uniteUnique(...arr) {
    let el = [...arr[0]];
    arr.forEach(elem => {
        elem.forEach(num => {
            let cont = 0;
            el.forEach(el => {
                if (num !== el) {
                    cont += 1;
                };
            });
            if (cont === el.length) {
                el.push(num);
            };
        })
    })
    return el
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//================================================================================================================================
//=====10) Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//================================================================================================================================

//mi solucion
function convertHTML(str) {

    let arr = str.split("");
    let resp = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "&":
                resp.push("&amp;");
                break;
            case "<":
                resp.push("&lt;")
                break;
            case ">":
                resp.push("&gt;")
                break;
            case "\"":
                resp.push("&quot;")
                break;
            case "\'":
                resp.push("&apos;")
                break;
            default:
                resp.push(arr[i])
        }
    }

    return resp.join("")
}
console.log(convertHTML('Stuff in "quotation marks"'));

// ==== solucion corta
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(entity => htmlEntities[entity] || entity).join('');
}

// test here
convertHTML("Dolce & Gabbana");

//===========================================================================================================================================
//=====11)Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
//The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//===========================================================================================================================================
function sumFibs(num) {
    let i = 1;
    let n = 1;
    let arr = [1];
    let sum = 1;
    do {
        arr.push(i);
        i += arr[n - 1];

        if (arr[n] % 2 !== 0) {
            sum += arr[n];
        }
        n++;
    }
    while (i <= num)
    return sum
}

console.log(sumFibs(75025));

//=================================================================================================================================================================================
//=====12)Sum all the prime numbers up to and including the provided number.
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//The provided number may not be a prime.
//=================================================================================================================================================================================

function sumPrimes(num) {
    let i = 2;
    let sum = 0;
    do {
        let cont = 0;
        for (let n = 1; n <= i; n++) {
            if (i % n === 0) {
                cont += 1;
            };
        };
        if (cont <= 2) {
            sum += i;
        }
        i++;
    } while (i <= num);
    return sum;
}

console.log(sumPrimes(10));


//otra solucion

function sumPrimes(num) {
    // step 1
    let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
    // step 2
    let onlyPrimes = arr.filter((n) => {
        let m = n - 1;
        while (m > 1 && m >= Math.sqrt(n)) {
            if ((n % m) === 0)
                return false;
            m--;
        }
        return true;
    });
    // step 3
    return onlyPrimes.reduce((a, b) => a + b);
}

//====================================================================================================================================================================================
//=====13)Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
//====================================================================================================================================================================================

// ==== mi respuesta

function smallestCommons(arr) {
    let aux = [];
    let largo = 0;
    let factores = [];
    ////////// los multiplos de un numero siempre son numeros primos
    function multi(num) { //busca los multiplicadores de num, y envia el multiplicar y las veces que se repite, en el formato {base,exp}, para mas adelante hacer un base^exp
        let base = 2;
        let exp = 0;
        let algo = true;
        let mul = [];
        do {
            if (num % base === 0) {
                num /= base;
                exp += 1;
                algo = true
            } else {
                algo = false;
                if (exp !== 0) {
                    mul.push({ base, exp });
                }
                base += 1;
                exp = 0;
            }
        } while (num !== 1)

        if (algo) {
            mul.push({ base, exp });
        }
        return mul
    }
    ////////
    function primos(num) { // decide si num es numero primo
        let cont = 0;
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                cont += 1;
            }
        }
        return cont === 1 ? true : false
    }

    /////// se crea un arreglo aux con los multiplicadores de los numeros, en formato {base,exp}
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        aux.push(...multi(i));
    };

    ///// aca se revisa el arreglo aux, y se filtran los numeros que tengan las mismas bases, se elige el de mayor exponente
    for (let i = 2; i <= Math.max(...arr); i++) {
        if (primos(i)) {
            largo = aux.filter(elem => elem.base === i).length; // para algunos numeros primos el largo de este arreglo puede ser cero
            if (largo) {
                // se filtra el arreglo para bases iguales, se ordena para el de mayor exponente que queda ultimo en el arreglo y se selecciona
                factores.push(aux.filter(elem => elem.base === i).sort((a, b) => a.exp - b.exp)[largo - 1]);
            }
        }
    }

    /////// una vez se tiene filtrado las bases con los mayores exponentes , se multiplican entre si
    return factores.map(elem => Math.pow(elem.base, elem.exp)).reduce((total, elem) => total *= elem);
}
console.log(smallestCommons([23, 18]))

// ==== solucion mas avanzada

function smallestCommons(arr) {

    // range
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);

    let smallestCommon = lcm(min, min + 1);

    while (min < max) {
        min++;
        smallestCommon = lcm(smallestCommon, min);
    }

    return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 * https://en.wikipedia.org/wiki/Euclidean_algorithm
 */
function gcd(a, b) {
    while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b;
    }
    return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
    return (a * b / gcd(a, b));
}


// test here
smallestCommons([1, 5]);