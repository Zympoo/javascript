/* Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
Schrijf een prompt die de leeftijd vraagt en zorg ervoor dat je een number uitkomt */

var leeftijd = parseInt(window.prompt("Hoe oud ben je?"))
if(leeftijd >= 18){
    console.log(`Je mag deelnemen, je bent ${leeftijd} jaar oud.`)
}
else{
    console.log(`Je bent te jong, je bent ${leeftijd} jaar oud`)
}