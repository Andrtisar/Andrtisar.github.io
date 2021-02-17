// Factorial

let x = 7;

function myFactorial(num) {
    if(num < 0) {
        return NaN;
    }
    if(num == 1 || num == 0) {
        return 1;
    }
    else {
        return num * myFactorial(num-1);
    }
}

console.log("Factorial of", x, ":", myFactorial(x));

// Average

let y = [4, 5, 8, 5];

function myAverage(array) {
    let i;
    let sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / i;
}

console.log("Average", y, myAverage(y));

// Sum of even

let z = 10;

function sumOfEvenNumsBefore(num) {
    let sum = 0;
    for(let i = 0; i < num; i += 2) {
        sum += i;
    }
    return sum;
}

console.log("Sum of even numbers smaller than ", z, ":", sumOfEvenNumsBefore(z));

// Fibonacci numbers

let f = 7;

function nthFibonacciNumber(fib) {
    let temp1, temp2, currentNumber;
    for(let i = 1; i < fib; i++) {
        if(i > 2) {
            currentNumber = temp1 + temp2;
            temp1 = temp2;
            temp2 = currentNumber;
        }
        else if(i == 1) {
            temp1 = 1;
        }
        else { // i == 2
            temp2 = 2;
        }
    }
    return currentNumber;
}

console.log(f, "th Fibonacci number is equal to:", nthFibonacciNumber(f));

function nthFibonacciNumberButWithRecurrence(fib) {
    if(fib <= 2 && fib > 0) {
        return 1;
    }
    else if(fib > 2) {
        return nthFibonacciNumberButWithRecurrence(fib-2)+nthFibonacciNumberButWithRecurrence(fib-1)
    }
    else {
        return NaN;
    }
}

console.log(f, "th Fibonacci number is equal to:", nthFibonacciNumberButWithRecurrence(f));
