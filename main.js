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

// 2

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}

const salarySum = salaries.john + salaries.adam + salaries.katie;
console.log(salarySum);

// 3

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

console.log(isObject({}));
console.log(isObject(10));
console.log(isObject(null));