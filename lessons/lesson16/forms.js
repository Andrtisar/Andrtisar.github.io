document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();
    console.log(event);

    let form = event.target;
    console.log(form['name'].value);

    if(!form['agree'].checked) {
        document.querySelector('label[for=agree]').style.color = "red";
        document.querySelector('label[for=agree]').style.fontWeight = "bold";
    }
    else {
        document.querySelector('label[for=agree]').style.color = null;
        document.querySelector('label[for=agree]').style.fontWeight = null;

        let message = form['name'].value;
        if(form['education'].value == "school") {
            message += " is in school and ";
        }
        else if(form['education'].value == "univer") {
            message += " is in university and ";
        }
        else if(form['education'].value == "work ") {
            message += " works and ";
        }
        else if(form['education'].value == "other") {
            message += " won't say anything, but ";
        }
        else {
            message += " doesn't know, but ";
        }

        message += "likes";
        if(form['like'].value == "cats") {
            message += " cats.";
        }
        else if(form['like'].value == "dogs") {
            message += " dogs.";
        }
        
        alert(message);
    }
}