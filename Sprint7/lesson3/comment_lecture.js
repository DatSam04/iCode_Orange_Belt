// Closures


// Counter Example
function createCounter() {
    let count = 0; // `count` is a private variable
    return {
        increment: function() {
            count += 1;
            console.log(count);
        },
        decrement: function() {
            count -= 1;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}


// Strict Equality





// Object/Arrays
const items = [
    { name: 'Bike',     price: 100},
    { name: 'TV',       price: 200},
    { name: 'Album',    price: 10},
    { name: 'Book',     price: 5},
    { name: 'Phone',    price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}
];
console.log(items);



// .filter method



// .map method



// .find method



// .forEach method



// .some method



// .every method



// .reduce method



// .includes method
