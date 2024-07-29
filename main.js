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

// 5

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(objectOne, objectTwo) {
    return objectOne.firstName === objectTwo.firstName
        && objectOne.lastName === objectTwo.lastName;
}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn));
console.log(checkIfUsersHaveTheSameName(firstJohn, adam));

// 6

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 }));
console.log(getVoteCount({ upvotes: 75, downvotes: 90 }));
console.log(getVoteCount({ upvotes: 50, downvotes: 50 }));

// 7

function getCubeVolume(cube) {
    return cube.height * cube.length * cube.width;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 }));
console.log(getCubeVolume({ width: 100, length: 500, height: 0 }));
console.log(getCubeVolume({ width: 15, length: 2, height: 5 }));

// 8

function getCityInformation(city) {
    return `${city.name} is in ${city.country} and has an area of ${city.areaInKilometers} square kilometers`;
}

console.log(getCityInformation({
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
}));