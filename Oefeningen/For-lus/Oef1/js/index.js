let hoeveelKeer = parseInt(window.prompt("Hoeveel getallen wil je ingeven"));
let som = 0;
let teller;

for(teller = 1; teller <= hoeveelKeer; teller++){
    let getal = parseInt(window.prompt(`Vul getal ${teller} in`))
    som += getal;
}
alert(`De totale som van de ${teller} getallen is ${som}`);