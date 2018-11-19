//Ejemplo de destructuracion ES6

/* --------Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES,
and assign value with key tomorrow to tempOfTomorrow in line.*/

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

//-------------Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow: { max: maxOfTomorrow } } = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//----------Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8,
    b = 6;
(() => {
    "use strict";
    // change code below this line
    return [a, b] = [b, a]
        // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/*-----------Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original
array source with the first two elements omitted.*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [, , ...arr] = list; // change this
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


//-----------------Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    "use strict"; // do not change this line

    // change code below this line
    return ({ max, min }) => {
        // use function argument destructuring
        return (max + min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015