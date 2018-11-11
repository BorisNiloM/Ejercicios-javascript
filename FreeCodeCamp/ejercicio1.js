// Ejercicio Record Collection

/* Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

if prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

here are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

 If value is empty (""), delete the given prop property from the album.*/

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (prop !== "tracks" && value) {

        collection[id][prop] = value;
        return collection;
    } else if (prop === "tracks") {
        if (!collection[id][prop] && value) {
            var tracks = [];
            collection[id][prop] = tracks;
            collection[id][prop].push(value);
            return collection;
        } else if (collection[id][prop] && value) {
            collection[id][prop].push(value);
            return collection;
        } else if (!value) {
            delete collection[id][prop];
            return collection
        }
    } else if (!value) {
        delete collection[id][prop];
        return collection
    } else {
        return collection;
    }


}

// Alter values below to test your code
console.log(updateRecords(2548, "tracks", ""));