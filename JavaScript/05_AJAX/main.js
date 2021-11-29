// Ajax Requests

const xhr = new XMLHttpRequest();
// if (window.XMLHttpRequest)
//     xhr = new XMLHttpRequest();
// else
//     xhr = new ActiveXObject();

const api_url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

xhr.open("GET", api_url);
xhr.send();

// xhr.onreadystatechange = () => {
//     if (xhr.status == 200) {
//         //console.log("Status Code:", xhr.statusText);
//         console.log("Response OK!");
//     }

//     if (xhr.readyState == 4) {
//         let result = JSON.parse(xhr.responseText);
//         console.log(result);
//     }
//     document.write("Ready Status:" + xhr.readyState + "<br>");
//     console.log("Ready Status:", xhr.readyState);
// };

xhr.onload = () => {
    let result = JSON.parse(xhr.responseText);
    console.log(result);
}

// xhr.addEventListener("load", () => {
//     console.log(xhr.responseText);
// })