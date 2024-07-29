// 1

const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined
}

function checkIfPropertyIsDefined(user, value) {
    return user.hasOwnProperty(value) && user[value] !== undefined;
}

console.log(checkIfPropertyIsDefined(user, 'firstName'));
console.log(checkIfPropertyIsDefined(user, 'age'));
console.log(checkIfPropertyIsDefined(user, 'height'));

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

// 4

const userTwo = {
    name: 'John'
}

function removeProperty(user, property) {
    if (user.hasOwnProperty(property)) {
        delete user[property];
        return true;
    }
    return false;
}

console.log(removeProperty(userTwo, 'name'));
console.log(removeProperty(userTwo, 'name'));
console.log(removeProperty(userTwo, 'weight'));