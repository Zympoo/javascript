function printTafel(getal){
    for(let i = 1; i <= 10; i++){
        document.querySelector("#tafelResultaat").innerHTML += `<li>${i} x ${getal} = ${getal * i}</li>`;
    }
}

//programma
getal = parseInt(window.prompt("Geef een getal in."));
printTafel(getal);