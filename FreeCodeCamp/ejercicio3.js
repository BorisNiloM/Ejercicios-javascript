/*Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.*/

/* Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray
and store the new array in the variable squaredIntegers.*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const positivos = arr.filter((value) => {
        let aux = 0;
        if (value > 0) {
            aux = Math.floor(value);
            return (value - aux == 0)
        };
    });

    const squaredIntegers = positivos.map((value) => value * value)


    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);