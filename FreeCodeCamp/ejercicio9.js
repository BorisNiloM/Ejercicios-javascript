//=================================================================================================================================================
//=====1) The members of freeCodeCamp happen to love tea.
//In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team,
//and store them in the tea4TeamFCC variable.
//=================================================================================================================================================

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

console.log(tea4TeamFCC);

//===========================================================================================================================================
//=====2) Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.
//Note that the getTea function has been modified so it now takes a function as the first argument.
//Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.
//===========================================================================================================================================

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

//==========================================================================================================================================================================
//=====3) Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array.
//The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.
//==========================================================================================================================================================================

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(list, bookName) {

    return list.concat(bookName);

    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(list, bookName) {
    if (list.indexOf(bookName) >= 0) {

        return list.slice(0, list.indexOf(bookName))
            .concat(list.slice(list.indexOf(bookName) + 1));

        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("bookList: " + bookList);
console.log("newBookList: " + newBookList);
console.log("newerBookList: " + newerBookList);
console.log("newestBookList: " + newestBookList);


//======solucion2
function add(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
}

function remove(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) { // Check whether the bookName parameter is in new array.
        /.
        newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
        return newArr; // Return the new array.
    }
}

//========solucion3
function add(list, bookName) {
    return [...list, bookName];
}

function remove(list, bookName) {
    if (list.indexOf(bookName) >= 0) {
        return list.filter((item) => item !== bookName);
    }
}

//============================================================================================================================================================================
//=====4) The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable.
//The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.
//============================================================================================================================================================================

// the global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line

var rating = [];
watchList.map((movie) => {
    rating.push({ title: movie["Title"], rating: movie["imdbRating"] })
});

// Add your code above this line

console.log(rating);

//=================================================================================================================================================
//=====5) Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.
//=================================================================================================================================================
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach(a => newArray.push(callback(a)));
    //el this es para cada elemento en el cual se aplique myMap
    // Add your code above this line
    return newArray;

};

var new_s = s.myMap(function(item) {
    return item * 2;
});

console.log(new_s);

//===========================================================================================================================================================
//=====6) The variable watchList holds an array of objects with information on several movies.
//Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0.
// Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.
//===========================================================================================================================================================

// the global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line

var filteredList = watchList.map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] }
}).filter((e) => e.rating >= 8);

// Add your code above this line

console.log(filteredList);

//==========================================================================================================================================================================
//=====7) Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.
//==========================================================================================================================================================================

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    // Add your code below this line
    this.forEach(a => {
        if (callback(a)) {
            newArray.push(a);
        }
    });
    // Add your code above this line
    return newArray;

};

var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});

console.log(new_s);

//===utilizando for loop

Array.prototype.myFilter = function(callback) {
    var newArray = [];
    // Add your code below this line
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArray.push(this[i]);
        }
    }
    // Add your code above this line
    return newArray;

};

var new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});

//=============================================================================================================================================================================
//=====8) Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
//=============================================================================================================================================================================
function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    return anim.slice(beginSlice, endSlice);

    // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));

//=========================================================================================================================================
//=====9) Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3,
//and return a new array with only the first three items.
//Do not mutate the original array provided to the function.
//=========================================================================================================================================
function nonMutatingSplice(cities) {
    // Add your code below this line
    return cities.slice(0, 3);

    // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));
console.log(inputCities);

//============================================================================================================================================================
//=====10) Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.
//============================================================================================================================================================

function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return first.concat(second);

    // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));

//=======================================================================================================================================================
//=====11) Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
//=======================================================================================================================================================

function nonMutatingPush(original, newItem) {
    // Add your code below this line
    return original.concat(newItem);

    // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));


//=======================================================================================================================================================
//======12) The variable watchList holds an array of objects with information on several movies.
//Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
//Recall from prior challenges how to filter data and map over it to pull what you need.
//You may need to create other variables, but save the final average into the variable averageRating.
//Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
//========================================================================================================================================================

// the global variable
var watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Add your code below this line

var averageRating = watchList.filter(movie => movie.Director === "Christopher Nolan")
    .map(movie => Number(movie.imdbRating))
    .reduce((total, movie) =>
        total + movie) / watchList.filter(movie => movie.Director === "Christopher Nolan").length
    // Add your code above this line

console.log(averageRating);

//=============================================================================================================
//=====13) Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
//=============================================================================================================

// sort() solo ordena segun el codigo unicode del string que ordena.
// si es sort(funcionComparadora(a,b)), dependiendo del retorno de la funcionComparadora es el orden.
// si a<b, retorna -1, lo que implica que a antes que b
// si a>b, retorna 1, lo que implica que a va despues de b
// si a = b, retorna 0, y a y b quedan en la misma posicion
// Esto segun un orden ascendente, si es descendete se cambian los signos del retorno.
// Si se evaluan 2 numeros, basta con return (a-b), y se cumple lo mismo de antes
function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });

    // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//=================================================================================================================
//=====14) Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
// The function should return a new array, and not mutate the globalArray variable.
//=================================================================================================================

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line
    let aux = [];
    return aux.concat(arr).sort(function(a, b) { //concat retorna un array nuevo
        return a - b
    });

    // Add your code above this line
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);

//====================================================================================================================================
//=====15)Use the split method inside the splitify function to split str into an array of words. The function should return the array.
// Note that the words are not always separated by spaces, and the array should not contain punctuation.
//====================================================================================================================================

function splitify(str) {
    // Add your code below this line
    return str.split(/\W/); // split retorna un array nuevo. No causa mutacion. Como argumento pued ir un separador  como espacio (" ") o un regex

    // Add your code above this line
}
console.log(splitify("Hello World,I-am code"));

//=====================================================================================================================================================================
//======16) Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string.
//For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method
//=====================================================================================================================================================================

//El metodo join usa los elementos de un array para crear un string. El argumento se utiliza como delimitador, como (" ")
function sentensify(str) {
    // Add your code below this line

    return str.split(/\W/).join(" ")

    // Add your code above this line
}
console.log(sentensify("May-the-force-be-with-you"));

//=====================================================================================================================
//======17) Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.
//You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)
//The output should be all lower-cased letters
//The output should not have any spaces
//=====================================================================================================================

// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
    return title.toLowerCase().split(" ").filter(word => {
        if (word) {
            return word
        }
    }).join("-");

}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log(winterComing);
console.log(globalTitle);