let apiUrlBase = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";

document.querySelector("#calculate").onclick = function(event) {
    let sum = document.querySelector("#sum").value;
    let currencyCode = document.querySelector("#currency").value;
    let url = apiUrlBase + currencyCode + '&json';

    $.get(url, function(data) {
        console.log("Request success", data);

        let rate = data[0].rate;
        document.querySelector("#result").value = rate*sum;
    });
}

// let apiUrlBase = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";

// document.querySelector("#calculate").onclick = function (event) {
//     let sum = document.querySelector('#sum').value;
//     let currencyCode = document.querySelector('#currency').value;
//     let url = apiUrlBase + currencyCode + "&json";

//     $.get(url, function(data) {
//         console.log("Request success", data);

//         let rate = data[0].rate;
//         document.querySelector('#result').value = rate*sum; 
//     });

//     // let data = $.get(url);

//     console.log("jQuery get call OK.");
// }