// 1

const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined
}

function checkIfPropertyIsDefined(user, value) {
    return user.hasOwnProperty(value) && user[value] !== undefined;
}

console.log(checkIfPropertyIsDefined(user, 'firstName')); // true
console.log(checkIfPropertyIsDefined(user, 'age')); // false
console.log(checkIfPropertyIsDefined(user, 'height')); // false