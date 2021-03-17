// window.open('https://javascript.info/');

document.querySelector("#newWindow").onclick = function () {
    window.open('https://javascript.info/');
}

let params = "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100";

document.querySelector("#newWindowWithParams").onclick = function () {
    window.open("test.html", "test", params);
}

document.querySelector("#newWindowWithFeedback").onclick = function () {
    let newWindow = window.open("about:blank", "hello", "width=200,heigth=200");
    newWindow.document.write("Again. Hello, world!");
}

document.querySelector("#newWindowClose").onclick = function () {
    let newWindow = window.open("about:blank", "hello", "width=200,heigth=200");
    newWindow.document.write("Ready to close!");

    let button = document.createElement("button");
    button.innerText = "Close";
    newWindow.document.body.appendChild(button);
    button.onclick = function () {
        newWindow.close();
    }
}

