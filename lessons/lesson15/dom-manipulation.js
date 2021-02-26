let gallery = document.getElementById("cats-gallery");

for (let i=1; i<=4; i++) {
     let img = document.createElement("img");
     img.src = "img/image" + i + ".jpg";
    
     gallery.appendChild(img);
}

// let number = Math.floor(Math.random() * 10) + 1;

// for (let i=1; i<=number; i++) {
//      let img = document.createElement("img");
//      img.src = "https://loremflickr.com/350/350/cats?random="+i;

//      gallery.appendChild(img);
// }

let count = gallery.children.length;
let totalElements = document.getElementById("total-cats");
totalElements.innerText = count;

let firstImage = document.querySelector(".gallery img:first-child");

// firstImage.style.borderStyle = "solid";
// firstImage.style.borderWidth = "0.25rem";
// firstImage.style.borderColor = "red";

firstImage.classList.add("red-border");

let headerElement = document.querySelector("h1");
headerElement.parentElement.removeChild(headerElement);

let footerElement = document.querySelector(".footer");
gallery.appendChild(footerElement);

// Event

function handleClick() {
    console.log("Something happen!");
}

let newButton = document.querySelector(".new-button");
newButton.onclick = handleClick;

// *** SMART FUNCTIONS ***

function first(anotherFunction) {
    let result = anotherFunction(2, 3);
    console.log("Результат: ", result);
}

function sum(x,y) {
    return x+y;
}

function div(x,y) {
    return x/y;
}

first(sum);
first(div);

function greetGenerator(name) {
    return function(anotherName) {
        console.log("Привет, " + anotherName + "! Меня зовут " + name)
    }
}

let spiderGreeting = greetGenerator("Тони");
spiderGreeting("Питер");

// **************

let magicButton = document.querySelector(".magic-button");

magicButton.onclick = function () {
    console.log("Wingardium leviosa!");
}

firstImage.onmouseover = function () {
    firstImage.style.borderColor = "green";
    firstImage.style.borderWidth = "1rem";
}

firstImage.onmouseout = function () {
    firstImage.style.borderColor = null;
    firstImage.style.borderWidth = null;
}

// **************

let buttons = document.getElementsByClassName("switch");

for (button of buttons) {
    button.onclick = function(eventObject) {
        console.log("A Elbereth Gilthoniel, silivren penna miriel o menel aglar elenath!");
        eventObject.target.style.backgroundColor = "green";
    }
    button.onmouseout = function(eventObject) {
        console.log("A Elbereth Gilthoniel, silivren penna miriel o menel aglar elenath!");
        eventObject.target.style.backgroundColor = null;
    }
}



