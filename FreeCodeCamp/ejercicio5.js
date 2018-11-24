//=======Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//=======Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//=======Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//=======Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces.
// the flag i mean insensitive

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//=======Apply the .match() method to extract the word coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//=======Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.
// the flag g mean global

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//=======Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the wildcard dot character.
// . es para cualquier letra

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//=======Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//=======Match all the letters in the string quoteSample.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//=======Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//=======Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//=======You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.
//+ es para una o mas coincidencias

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

/*=======Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags,
and it should not match any of the other quotes.*/
// * es para cero o mas coincidencias

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

/*=======Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular
expression matches any character.*/
//?> Limita la busqueda hasta el primer > que encuentre

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

//=======Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

//=======se the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.
//Usar ^ fuera de los [] ayuda a buscar coincidencias al principio del str

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//=======Use the anchor character ($) to match the string "caboose" at the end of the string caboose.
//Usar $ busca coincidencias al final del str

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//======Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// \w es la forma corta de [A-Za-z0-9_]

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//======Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// \W es la forma corta de [^A-Za-z0-9_] , lo opuesto a \w

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//======Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
//\d es la forma corta de [0-9]

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

//=======Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
//\D forma corta de [^0-9], opuesto a \d

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

/*=======Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
Change the regex userCheck to fit the constraints listed above.*/

let username = "JackOfAllTrades";
let userCheck = /\D\w/; // Change this line
let result = userCheck.test(username);

//======Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
//\s es la forma para reconocer espacios en blanco, retornos de carro, tabulacion, salto de pagina y linea nueva ( forma corta de [ \r\t\f\n\v])

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//======Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
//\S coincide contodo menos con los espacios en blanco [^\r\t\f\n\v]

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//=======Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
//{3,6} se usa para buscar la letra a la izquierda de los parentesis, entre 3 a 6 veces

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

//=======Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
//a{3,} repite la letra a un minimo de 3 veces sin limite

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

//=======Change the regex timRegex to match the word "Timber" only when it has four letter m's.
//a{3} para palabras cuya letra a se repite 3 veces

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

//=======Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/*Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.*/
//(?=...) es una lookahead positivo. Busca si el patron de busqueda(...) se encuenta mas adelante
//(?!...) lookahead negativo. Busca el patron que no se quiere que este ahi.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

/*Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.*/
//los grupos de captura se colocan entre ()

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

/*Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".*/

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

/*Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line