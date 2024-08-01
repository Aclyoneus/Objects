// 1

const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined
}

function checkIfPropertyIsDefined(object, property) {
    return user[property] !== undefined;
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

function checkIfUsersHaveTheSameName(firstUser, secondUser) {
    return firstUser.firstName === secondUser.firstName
        && firstUser.lastName === secondUser.lastName;
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

// 9

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

function getUserCopy(user) {
    return {
        firstName: user.firstName,
        lastName: user.lastName
    }
}

const newUser = getUserCopy(john);
console.log(newUser.firstName);
console.log(newUser.lastName);
console.log(newUser === john);

// 10

function getAnimalDescription(animal){
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}

// 11

const rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}

// 12

function addContact(contacts, name, phoneNumber) {
    const newContacts = {...contacts};

    newContacts[name] = {
        name: name,
        phoneNumber: phoneNumber
    }

    return newContacts;
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name);
console.log(contactsWithJohn.John.phoneNumber);
console.log(contacts === contactsWithJohn);
console.log(contacts.John);

// 13

function findContact(object, property) {
    if (object.hasOwnProperty(property)) {
        return `Name: ${property}, Phone: ${object[property].phoneNumber}`;
    }
    return;
}

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo);

// 14

const userThree = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
        return "Hi, I'm Bob Ross!";
    }
}
const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
        return "Hi, I'm Kate!";
    }
}
const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
        return "<engine noise>";
    }
}

function validateIfFirstNameisString(object) {
    return object.hasOwnProperty('firstName')
            && typeof object.firstName === 'string';
}

function validateIfLastNameisString(object) {
    return object.hasOwnProperty('lastName')
        && typeof object.lastName === 'string';
}

function validateIfAgeIsNumber(object) {
    return object.hasOwnProperty('age')
        && typeof object.age === 'number';
}

function validateIfGreetIsFunction(object) {
    return (object.hasOwnProperty('greet')
        && typeof object.greet === 'function');
}

function validateIfGreetContainsBothNames(object) {
    return object.greet().includes(object.firstName)
        && object.greet().includes(object.lastName);
}

function validateIfObjectIsAUser(object) {
    return validateIfFirstNameisString(object)
        && validateIfLastNameisString(object)
        && validateIfAgeIsNumber(object)
        && (validateIfGreetIsFunction(object) && validateIfGreetContainsBothNames(object));
}

console.log(validateIfObjectIsAUser(userThree));
console.log(validateIfObjectIsAUser(objectExample));
console.log(validateIfObjectIsAUser(car));