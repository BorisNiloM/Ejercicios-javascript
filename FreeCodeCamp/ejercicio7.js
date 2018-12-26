//======================================
//==== 1) Convert Celsius to Fahrenheit
//======================================

let convertToF = (celsius) => celsius * 9 / 5 + 32;

convertToF(30);

//=====================================
//===== 2) Reverse the provided string.
//=====================================

function reverseString(str) {
    let strAux = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strAux += str[i];
    }

    return strAux;
}

reverseString("hello");

//======================================================
//===== 3) Return the factorial of the provided integer.
//======================================================

function factorialize(num) {
    let prod = 1
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            prod *= i;
        }
        return prod;
    } else if (num = 0) {
        return prod;
    } else {
        return "El numero debe ser mayor o igual a cero";
    }
}

console.log(factorialize(10));

// ****Version mucho mas corta usando recursividad:

function factorialize(num) {
    if (num < 0) { return "Numero debe ser positivo" }
    if (num === 0) { return 1 }
    return num * factorialize(num - 1)
}

console.log(factorialize(10));

//=======================================================================
//=====4) Return the length of the longest word in the provided sentence.
//=======================================================================

//****realizado por mi
function findLongestWordLength(str) {
    let resAux = 0;
    let regEx = /.*?\S*/g; //expresion regular que busca cualquier caracter(.), que se repita cero o mas veces(*), lo anterior busca cero o 1 vez(?), todo menos los espacios (\S), que se repita cero o mas veces
    let palabras = [];
    palabras = str.match(regEx);

    for (let i = 0; i < palabras.length; i++) {
        if (i % 2 === 0) {
            let palInf = palabras[i].length;
            if (resAux < palInf) {
                resAux = palInf;
            }
        }
    }
    return resAux
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//*****Forma mas corta
function findLongestWordLength(str) {
    return str.split(" ") //split hace un array con cada palabra de la oracion, cuyo separador es " "
        .reduce((x, y) => Math.max(x, y.length), 0) // funcion que reduce a un solo valor. x es el total, que parte con valor inicial 0, y se compara el tamaño de cada miembro y.length con el valor x.
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//==========================================================================================================================================================
//=====5)Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//==========================================================================================================================================================

function largestOfFour(arr) {
    let arrAux = [];
    for (let i = 0; i < arr.length; i++) {
        arrAux.push(arr[i].reduce((x, y) => Math.max(x, y)));
    }
    return arrAux
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));

//===========================================================================================================
//=====6)Check if a string (first argument, str) ends with the given target string (second argument, target).
//===========================================================================================================

//Mi solucion
function confirmEnding(str, target) {

    let tarL = target.length;
    let strL = str.length;
    let strF = str.slice(strL - tarL, strL)

    if (strF === target) {
        return true
    } else {
        return false
    }
    return strF
}

console.log(confirmEnding("Connor as", "as"));

//Version corta
function confirmEnding(str, target) {

    return str.slice(str.length - target.length) === target

}

console.log(confirmEnding("Connor as", "as"));

//==========================================================================================================================================
//=====7)Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
//==========================================================================================================================================

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return ""
    } else {
        return str + repeatStringNumTimes(str, num - 1)
    }

}
console.log([repeatStringNumTimes("abc", -1)]);

//version corta
let repeatStringNumTimes = (str, num) => num > 0 ? str + repeatStringNumTimes(str, num - 1) : ""
console.log([repeatStringNumTimes("abc", 1)]);

//===============================================================================================================================================================
//=====8)Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
//===============================================================================================================================================================

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//============================================================================================================================================================================================================
//=====9)Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
//============================================================================================================================================================================================================

function findElement(arr, func) {
    let arrAux = arr.filter(func)
    return arrAux.length > 0 ? arrAux[0] : undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

//====================================================================================
//=====10)Check if a value is classified as a boolean primitive. Return true or false.
//====================================================================================

function booWho(bool) {
    return typeof bool === 'boolean' ? true : false
}
console.log(booWho(true));

//===================================================================================================================================
//=====11)Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//===================================================================================================================================
//mi respuesta
function titleCase(str) {

    let arrAux = str.toLowerCase().split(" ")
    let pru = [];
    let fin = "";
    for (let i = 0; i < arrAux.length; i++) {
        for (let j = 0; j < arrAux[i].length; j++) {
            if (j == 0) {
                pru[i] = arrAux[i][0].toUpperCase();
            } else {
                pru[i] += arrAux[i][j]
            }
        }
        if (i == arrAux.length - 1) {
            fin += pru[i];
        } else {
            fin += pru[i] + " "
        }
    }
    return fin
}

console.log(titleCase("I'm a little tea pot"));

//===solucion corta
function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
/* replace("algo","otra"), busca el string "algo" y lo reemplaza por "otra". El patron de busqueda dentro del  primer argumento del replace(),
/(^|\s)\S/g busca palabras al inicio (^), o(|) que contenga espacio en blanco a la izquierda (\s), de cualquier palabra en la oracion(g), que contenga palabras o numeros(\S).
Al encontrar esas palabras(L), los envia a, (L) => L.toUpperCase(), que los trasforma a letras mayusculas.*/

console.log(titleCase("I'm a little tea pot"));

//=============================================================================================================================================================
//=====12)You are given two arrays and an index.Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//=============================================================================================================================================================

function frankenSplice(arr1, arr2, n) {
    let Aux = arr2.slice();

    for (let i = 0; i < arr1.length; i++) {
        Aux.splice(n + i, 0, arr1[i])
    }
    return Aux
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))

//========================================================================
// =====13)Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
//=======================================================================
function bouncer(arr) {
    return arr.filter((val) => Boolean(val));
}
console.log(bouncer([7, "ate", "", false, 9]));

//=============================================================================================================================================
//=====14)Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//The returned value should be a number.
//=============================================================================================================================================
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    arr.sort((a, b) => a - b)
    return arr.indexOf(num)
};

console.log(getIndexToIns([20, 3, 5], 19));

//=============================================================================================================================================
//=====15)Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//=============================================================================================================================================

//mi solucion
function mutation(arr) {

    let str1 = arr[0].toLowerCase().split("");
    let str2 = arr[1].toLowerCase().split("");
    let Lstr2 = str2.length;
    let pru = 0;

    for (let i = 0; i < str2.length; i++) {
        for (let j = 0; j < str1.length; j++) {
            if (str2[i] === str1[j]) {
                pru += 1;
                break;
            }
        }
    }

    if (Lstr2 === pru) {
        return true
    } else {
        return false
    }
}

console.log(mutation(["hello", "Hello"]));

//solucion mas corta

function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) != -1;
        });
}

//===========================================================================================================================================================
//=====16)Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//===========================================================================================================================================================

function chunkArrayInGroups(arr, size) {

    let la = Math.ceil(arr.length / size);
    let aux = [];
    for (let i = 0; i < la; i++) {
        aux[i] = arr.splice(0, size);
    }

    return aux;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));