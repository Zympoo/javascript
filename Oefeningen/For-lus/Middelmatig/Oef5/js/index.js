var getal = parseInt(window.prompt("Vul je gegeven getal in"))
var berekening = 0;

for(let i = 1; berekening <= 100; i++) {
    berekening = getal * i;
    if(berekening <= 100){
        console.log(berekening);
    }
}