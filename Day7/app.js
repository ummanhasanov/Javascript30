// ## Array Cardio Day 2
const people = [
    { "name": "John", year: 2000 },
    { "name": "Rocky", year: 2005 },
    { "name": "Alice", year: 1999 },
    { "name": "Bruce", year: 2011 },
    { "name": "Lux", year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123423 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and every checks
// Array.prototype.some() // is at least one person 19?
// First method
// const isAdult = people.some(function (person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// });

// Second method

const isAdult = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19);

console.log({ isAdult });

// Array.prototype.every() // is everyone 19?

const allAdults = people.every(person => ((new Date()).
    getFullYear()) - person.year >= 19);

console.log({ allAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are lokking for
// Find the comment with the id of 823423
// First method

const comment = comments.find(function (comment) {
    if (comment.id === 823423) {
        return true;
    }
});
console.log(comment);

// Second method
const comment1 = comments.find(comment => comment.id
    === 823423);

console.log(comment1);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id
    === 823423);

// console.log(index);

// comments.splice(index, 1);

console.table(comments);


const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];
console.table(newComments);
