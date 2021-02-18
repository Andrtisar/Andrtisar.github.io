console.log("Объекты");

let object1 = new Object();
let object2 = {};

let user = {
    name: "John",
    age: 30
};

console.log(user.name);
console.log(user.age);
console.log(user);

user.isAdmin = true;

console.log(user.isAdmin);
console.log(user);

user.permissions = [
    "create", "edit", "delete"
];

console.log(user);
console.log(user.permissions[1]);

delete user.permissions[0]; // empty slot Pog?
console.log(user);
console.log(user.permissions[1]);

delete user.permissions;
console.log(user);

let newUser = {
    name: "Mike",
    age: 15,
    "like birds": true
};

console.log(newUser["like birds"]);

let newerUser = {
    name: "Jotaro",
    age: 17,
    "likes squashes": false
};

console.log("Jotaro, do you like squashes, Jotaro?", newerUser["likes squashes"]);


let key = "like birds";

newUser[key] = false; // not newUser.key = false

console.log(newUser["like birds"]);

let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log(obj.for + obj.let + obj.return);
console.log(user.noSuchProperty);

console.log("name" in user);
console.log("yoooo" in user);

console.log(user);

for(let key in user) {
    console.log(key);
    console.log(user[key]);
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
for(let key in menu) {
    if(typeof menu[key] == 'number') {
        menu[key] *= 2;
    }
}
console.log(menu);



console.log("Функции");

let storeProducts = [
    {name: "Samsung Galaxy A10", price: 3310},
    {name: "Nokia 5310", price: 1400},
    {name: "Apple iPhone 12 Pro Max", price: 41000},
    {name: "Xiaomi Poco X3", price: 6200},
    {name: "iPhone case", price: 500}
];

let totalCost = 0;
for(let product of storeProducts) {
    totalCost += product.price;
}
console.log(totalCost);


let orderProducts = [
    {name: "Apple iPhone 12 Pro Max", price: 41000},
    {name: "iPhone case", price: 500}
]

let orderCost = 0;
for(let product of orderProducts) {
    orderCost += product.price;
}
console.log(orderCost);

function getTotalCost(products) {
    let result = 0;
    for(let product of products) {
        result += product.price;
    }
    return result;
}
console.log(getTotalCost(storeProducts));
console.log(getTotalCost(orderProducts));

// ***

console.log(sum(2, "B", "2T"));
hello(newerUser.name);
universalAnswer();
// ***

function sum(x, y, z) {
    return x+y+z;
}

function hello(name) {
    console.log("Hello, " + name + "!");
}

function universalAnswer() {
    console.log(42);
}



console.log("Methods");

let person = {
    name: "",
    lastName: "",
    sayHello: function(otherName) {
        console.log("Hello, " + otherName + "! Kono " + this.name + " da!");
    },
    getFullName: function() {
        return this.name + " " + this.lastName;
    }
}

person.name = "Dio";
person.sayHello(newerUser.name);

person.name = "Diego";
person.sayHello("Johnny");

person.name = "Dio";
person.lastName = "Brando";
console.log(person.getFullName());


console.log("DOM");