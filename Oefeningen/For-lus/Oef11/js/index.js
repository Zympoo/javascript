let aantalGetallen = parseInt(window.prompt("Hoeveel getallen wil je zien?"));
let getal1 = 0 , getal2 = 1, getal3 = 0;

for(let i = 0; i <= aantalGetallen; i++){
    getal3 = getal1;
    getal1 += getal2;
    getal2 = getal3;
    console.log(getal1);
}