let gallery = document.getElementById("cats-gallery");

for (let i=1; i<=4; i++) {
     let div = document.createElement("div");
     div.classList.add("img-container");
     gallery.appendChild(div);

     let img = document.createElement("img");
     img.src = "img/image" + i + ".jpg";
     img.classList.add("img-style");
     div.appendChild(img);

     let button = document.createElement("button");
     button.innerText = "Cat #" + i;      
     div.appendChild(button);
}

// **************

let buttons = document.getElementsByTagName("button");
for (button of buttons) {
    button.onclick = function(eventObject) {
        eventObject.target.style.backgroundColor = "green";
        alert("Hello " + eventObject.target.innerText);
    }
    button.onmouseout = function(eventObject) {
        eventObject.target.style.backgroundColor = null;
    }
}

// **************

let question = document.querySelector("#question");

question.onclick = function() {
    let answer = prompt("How many cats are on the screen?", "# of cats");
    // if(answer == 4 || answer == "Four" || answer == "four" || answer == "4 cats"|| answer == "Four cats" || answer == "four cats" || answer == "4 of cat" || answer == "Four of cat" || answer == "four of cat" || answer == "Banana") alert("Correct!");
    if(answer == 4) alert("Correct");
    else alert("Count again.");
}

let add = document.querySelector("#add");

add.onclick = function() {
    let addCat = confirm("Do you need a new cat?");
    if(addCat) {
        let gallery = document.getElementById("additional-cats-gallery");
        let img = document.createElement("img");
        img.src = "https://loremflickr.com/350/350/cats?random="+Date.now();
        gallery.appendChild(img);
    }
}