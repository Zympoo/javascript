let hoeveelKeer = parseInt(window.prompt("Hoeveel getallen wil je invoeren?"))
let teller = 1;
let som = 0;
let gemiddelde = 0;

while(teller <= hoeveelKeer){
    let getal = parseInt(window.prompt(`Vul getal ${teller} in`))
    som += getal;
    gemiddelde = som / hoeveelKeer;
    teller++;
}
alert(`De totale som van de ${teller} getallen is ${som}`);
alert(`Het gemiddelde van de ${teller} getallen is ${gemiddelde}`);