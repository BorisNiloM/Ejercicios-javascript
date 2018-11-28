/*=======We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function,using a for loop,
to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.*/


function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    // change code above this line
    return newArr;
}

// change code here to test different cases:
console.log(filteredArray([
    [3, 2, 3],
    [1, 6, 3],
    [8, 13, 26],
    [19, 3, 9]
], 3));

/*=======We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return
the number of users whose online property is set to true.*/

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    // change code below this line
    let i = 0;
    for (let user in obj) {

        if ((users[`${user}`]['online'])) {
            i++;
        }
    }
    return i
        // change code above this line
}

console.log(countOnline(users));

/*=======Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.*/

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj)
        // change code above this line
}

console.log(getArrayOfUsers(users));

/*Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys,
 one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend.
 Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.*/

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends
        // change code above this line
}

console.log(addFriend(user, 'Pete'));