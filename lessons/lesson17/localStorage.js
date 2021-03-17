localStorage.setItem("default_color", "green");
let color = localStorage.getItem("default_color");
// alert("Default background: " + color);
document.querySelector("body").style.backgroundColor = color; // background-color

document.querySelector("#changeColor").onclick = function() {
    localStorage.setItem("default_color", "red");
    alert("Changed to red");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("default_color");
    alert("Old color: " + color);
}

document.querySelector("#restoreColor").onclick = function() {
    localStorage.setItem("default_color", "green");
    alert("Restored to green");
    document.querySelector("body").style.backgroundColor = localStorage.getItem("default_color");
}

localStorage.removeItem("default_color");
console.log("Current default background color: ", localStorage.getItem("default_color"));

//localStorage.clear();

localStorage.setItem("object", {
    name: "Alex",
    age: 20
});
console.log("Print object: ", localStorage.getItem("object"));

///

document.querySelector("#applySettings").onclick = function(event) {
    let fontSize = document.querySelector("#fontSize").value;
    let textColor = document.querySelector("#textColor").value;
    let textBackgroundColor = document.querySelector("#textBackgroundColor").value;

    let text = document.querySelector("#text");
    text.style.fontSize = fontSize+"px";
    text.style.color = textColor;
    text.style.backgroundColor = textBackgroundColor;

    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("textBackgroundColor", textBackgroundColor);
}

let savedFontSize = localStorage.getItem("fontSize");
let savedTextColor = localStorage.getItem("textColor");
let savedTextBackgroundColor = localStorage.getItem("textBackgroundColor");

let text = document.querySelector("#text");

if (savedFontSize) {
    document.getElementById("fontSize").value = savedFontSize;
    text.style.fontSize = savedFontSize+"px";
}

if (savedTextColor) {
    document.getElementById("textColor").value = savedTextColor;
    text.style.color = savedTextColor;
}

if (savedTextBackgroundColor) {
    document.getElementById("textBackgroundColor").value = savedTextBackgroundColor;
    text.style.backgroundColor = savedTextBackgroundColor;
}





