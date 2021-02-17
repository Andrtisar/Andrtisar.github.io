console.log("Операторы");
let x = 3;
let y = 7;

console.log("x=", x, "y=", y, "x*y=", x*y);

let sum = x + y;
let difference = x - y;
let division = x / y;

console.log(sum, difference, division);

let remainder = y % x;
console.log("y % x = ", remainder);

x = x + 10;
console.log(x);

x += 10; // *= 
console.log(x);

let z;
z += 10;
console.log(z);

x++;
// x = x + 1; x--;
console.log(x);

x = 1;
y = 2;

let w = x + 2 * y;
console.log("w_1 = ", w);

w = (x + 2) * y;
console.log("w_2 = ", w);

w = x++; 
console.log("w_3 = ", w);
console.log("x = ", x);

w = ++x; 
console.log("w_3 = ", w);
console.log("x = ", x);

let firstString = "Мама мыла раму.";
let secondString = "Рама мыла маму.";

let fullString = firstString + " " + secondString;
console.log(fullString);

console.log(10 + "-ая строка: " + fullString); // "10"

console.log(2 + y + x);
console.log('2' + x + y);
console.log(x + '2' + y);
console.log(x + y + '2');

console.log("Условия");

let value = 18;

//true false

if (value > 10) {
    console.log("Большое число!");
}
else if (value > 5) {
    console.log("Среднее число.");
}
else {
    console.log("Маленькое число...")
}

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
}

value = 7;

if (value > 5 && value < 8) {
    console.log("Больше пяти и меньше восьми.");
}

value = 10;

if (value < 5 || value > 8) {
    console.log("Меньше пяти или больше восьми.");
}

if (value != 100) {
    console.log("Это не 100!");
}

value = 3;

if (!(value = 3) && value < 5 || value > 10) {
    console.log("Верно!");
}
else  {
    console.log("Не Верно!"); 
}

value = 8;

let test = true;

if (value > 10) {
    console.log("Большое число!");
}
else if (value > 5) {
    console.log("Среднее число.");
    let test = true;
    console.log("test (internal): ", test)
}
else {
    console.log("Маленькое число...")
}

console.log("test (external): ", test);

if (test) console.log("Правда");

console.log("Циклы");

let N = 100;
let s = 0;

if (N > 0) s+=1;
if (N > 1) s+=2;
if (N > 2) s+=3;
if (N > 3) s+=4;
console.log("sum = ", s);

s = 0;
for (let i = 1; i <= N; i++) {
    s += i;
}
console.log("(for) sum = ", s);

s = 0;
let j = 1;
while (j <= N) {
    s += j;
    j++;
}
console.log("(while) sum = ", s);

console.log("Массивы");
// [7, 42, 3, 15, 1]
// 7 (#0), 42 (#1), 3 (#2), 15 (#3), 1 (#4)
// [7, 42, 3, 15, 1] != [3, 7, 42, 15, 1]

let data = [7, 42, 3, 15, 1];
console.log(data);

value = data[4];
console.log(value);

console.log(data.length);

data[0] = 9;
console.log(data);

data.push(99);
console.log(data, data.length);

value = data.pop();
console.log(value, data, data.length);

let word = ["в", "массивы", "можно", "класть все"];
console.log(word);

let mix = ["массив", "слов", 12, "и чисел", 0];
console.log(mix);

// 1    2    3
// 11   22   33
// 111  222  333

let matrix = [[1, 2, 3], [11, 22, 33], [111, 222, 333]];
console.log(matrix);

console.log(matrix[1][0]);

//**************

console.log(data);
let arraySum = 0;
for (let i=0; i < data.length; i++) {
    if (data[i] < 10) {
        arraySum += data[i];
        console.log("Step ", i, ":", arraySum);
    }    
}

console.log("Final :", arraySum);

//**************

let phones = [
    "Samsung Galaxy A10",
    "OnePlus 8 Pro", 
    "Nokia 5310",
    "Apple iPhone 12  Pro Max",
    "Xiaomi Poco X3",
    "Huawei P30",
    "Motorola Moto G9 Power"
];

let prices = [3310, 22400, 1400, 41000, 6200, 14900, 5400];

let minPrice = 5000;
let maxPrice = 15000;

let result = [];
for (let i = 0; i < phones.length; i++) {
    if (prices[i] >= minPrice && prices[i] <= maxPrice) {
        result.push(phones[i]);
    }
}
console.log(result);

