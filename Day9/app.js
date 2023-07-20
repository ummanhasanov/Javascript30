const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'Hugo', age: 5 },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '50px';
}

// 1. regular
console.log('Hello');

// 2. interpolated
let txt = 'bad';
console.log(`Hello I am ${txt} string!`); // txt = bad
console.log('Hello I am %s string!', 'bad'); // %s = bad

// 3. styled
console.log('%c I am some great text', 'font-size: 50px; background: blue; text-shadow: 10px 10px 0 red');

// 4. warning
console.warn('Oh NOOO');

// 5. error
console.error('This is error');

// 6. info
console.info('Crocodiles eat 3-4 people per year');

// 7. testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ome')); // if write existing class name it doesn't display 
// anything, else will display Assertion failed: console.assert

// 8. clearing
console.clear();

// 9. viewing DOM elements
console.dir(p);

// 10. Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years`);
    console.log(`${dog.name} is ${dog.age * 7} years`);
    console.groupEnd(`${dog.name}`);
});

// 11. counting
console.count('Umman');
console.count('Umman');
console.count('Huseyn');
console.count('Huseyn');
console.count('Huseyn');
console.count('Umman');
console.count('Umman');
console.count('Huseyn');
console.count('Huseyn');
console.count('Huseyn');
console.count('Huseyn');

// 12. timing
console.time('fetching data');
fetch('https://api.github.com/users/ummanhasanov')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table
console.table(dogs);