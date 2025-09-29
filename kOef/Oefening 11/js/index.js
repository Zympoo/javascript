function isEven(getal){
    return getal % 2 === 0;
}

//programma
let getal = parseInt(window.prompt("Geef een getal in."));

document.querySelector("#resultaat").innerText = isEven(getal);