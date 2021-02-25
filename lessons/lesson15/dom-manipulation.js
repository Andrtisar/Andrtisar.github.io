let gallery = document.getElementById("cats-gallery");

for(let i=1; i<=4; i++) {
    let img = document.createElement("img");
    img.src = "img/image" + i + ".jpg";

    gallery.appendChild(img);
}

let number = Math.floor(Math.random() * 10) + 1;

for (let i=1; i<=number; i++) {
     let img = document.createElement("img");
     img.src = "https://loremflickr.com/350/350/cats?random="+i;

     gallery.appendChild(img);
}

// let count = gallery.childElementCount;
let count = gallery.children.length;
let totalElements = document.getElementById("total-cats");
totalElements.innerText = count;

let firstImage = document.querySelector(".gallery img:first-child");

// firstImage.style.borderStyle = "solid";
// firstImage.style.borderWidth = "0.25rem";
// firstImage.style.borderColor = "green";

firstImage.classList.add("red-border");

let headerElement = document.querySelector("h1");
headerElement.parentElement.removeChild(headerElement);

let footerElement = document.querySelector(".footer");
gallery.appendChild(footerElement);


function handleClick() {
    console.log("Hi");
}

let newButton = document.querySelector(".new-button");
newButton.onclick = handleClick;

// missed a lot of stuff

let buttons = document.getElementsByClassName("switch");
for(button of buttons) {
    button.onclick = function(eventObject) {
        console.log("A");
        eventObject.target.style.backgroundColor = "green";
    }
    button.onmouseout = function(eventObject) {
        console.log("B");
        eventObject.target.style.backgroundColor = null;
    }
}
