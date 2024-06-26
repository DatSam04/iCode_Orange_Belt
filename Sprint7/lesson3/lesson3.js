// Closures
function myCourse(school){
    return function(name){
        console.log(school + ' ' + name);
    }
}
const iCodeBellevue = myCourse('iCode');
iCodeBellevue('Orange Belt');
//iCode Orange Belt
iCodeBellevue('Green Belt')
// iCode Green Belt

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
const counter = createCounter();
counter.increment();  // Outputs: 1
counter.increment();  // Outputs: 2
counter.decrement();  // Outputs: 1
console.log(counter.getCount()); // Outputs: 1

// Data Privacy Example
function createBankAccount(InitialDeposit){
    let balance = InitialDeposit;
    return {
        deposit(amount){
            balance += amount;
            console.log(`You sucessfully deposit $${amount}. New Balance: $${balance}`);
        },
        withdraw(amount){
            if(amount <= balance){
                balance -= amount;
                console.log(`You sucessfully withdraw $${amount}. New Balance: $${balance}`);
            }else{
                console.log(`Insufficient Fund. Current Balance: $${balance}`);
            }
        }
    }
}
const myBankAccount = createBankAccount(500);
myBankAccount.deposit(100);
myBankAccount.withdraw(600);
myBankAccount.withdraw(100); // Insufficient Fund


// Strict Equality
console.log(1 == '1');
// true
console.log(1 === '1');
// false

console.log(0 == '');
// true
console.log(0 === '');
// false

console.log(0 == false);
// true
console.log(0 === false);
// false

console.log(null == undefined);
// true
console.log(null === undefined);
// false

// Object/Arrays
const a = ['A', 'B', 'C', 'D'];
console.log(a);
// ['A', 'B', 'C', 'D']
console.log(a[0]);
// A

const b = [
    ['A', 'B'],
    [2, 4]
];
console.log(b);
// ['A', 'B'],
// [2, 4]
console.log(b[0][1]);
// B

// .filter method
const items = [
    { name: 'Bike',     price: 100},
    { name: 'TV',       price: 200},
    { name: 'Album',    price: 10},
    { name: 'Book',     price: 5},
    { name: 'Phone',    price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}
];
const filteredItems = items.filter((item) => {
    return item.price <= 100
});
console.log(items);
// Print all element in items
console.log(filteredItems);
// Print element that has price lower than 100

// .map method
const itemNames = items.map((item) => {
    return item.name
});
console.log(itemNames);

// .find method
const foundItem = items.find((item) => {
    return item.name === 'Album';
});
console.log(foundItem);

// .forEach method
items.forEach((item) => {
    console.log(item);
});

// .some method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
console.log(hasInexpensiveItems);
// true

// .every method
const isAllInexpensiveItems = items.every((item) => {
    return item.price <= 100;
});
console.log(isAllInexpensiveItems);
// false

// .reduce method
const totalPrice = items.reduce((currentTotalPrice, item) => {
    return item.price + currentTotalPrice;
}, 0);
console.log(totalPrice);

// .includes method
const numList = [1, 4, 7, 2, 5, 9];
console.log(numList.includes(4));
// true
console.log(numList.includes(3));
// false