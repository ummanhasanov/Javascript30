// ## Array Cardio Day 1

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1645, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Bethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Nenenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Bhattarai, Kumaran', 'Biagini, Marco', 'Big, Ben', 'Blair, Tony', 'Black, Elk'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// First method
const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true; // keep it
    }
});
console.table(fifteen);
// Second method
const fifteen2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen2);
/*-------------------------------------------------------------*/

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
// First method
const fullName = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullName);

// Second method
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
/*-------------------------------------------------------------*/

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// First method
const ordered = inventors.sort(function (a, b) {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});
console.table(ordered);

//  Second method
const sorted = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sorted);
/*-------------------------------------------------------------*/

// Array.prototype.reduce()
// 4. How many years did all inventors live?

// Method using reduce function with initial value as zero
const sumOfYears = inventors.reduce((sum, inventor) => {
    return sum + (inventor.passed - inventor.year)
}, 0);
console.log(sumOfYears);
/*-------------------------------------------------------------*/

// 5. Sort inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);
/*-------------------------------------------------------------*/

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevards_in_Paris
// copy and paste code on console website linked behind and press enter then de and enter

// const category = document.querySelector('.mw-content-ltr');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));
/*-------------------------------------------------------------*/


// 7. Sort exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
})
console.log(alpha);
/*-------------------------------------------------------------*/

// 8. Reduce exercise 
// Sum up the instances of each these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce(function (obj, item) {
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++; 
    return obj;
},{});
console.log(transportation);