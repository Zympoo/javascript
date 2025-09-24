/*Je vraagt het geboortejaar van de gebruiker (bijv. 2006)
Je vraagt ook het huidige jaar (bijvoorbeeld 2025)
Je laat de pc uitrekenen hoeveel jaar oud je bent en doet de onderstaande controle
Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn*/

var geboorteJaar = parseInt(window.prompt("Wat is je geboortejaar"));
var huidigJaar = parseInt(window.prompt("Wat is het huidige jaar"));

var leeftijd = huidigJaar - geboorteJaar;

if(leeftijd >= 18){
    console.log(`Je mag deelnemen, je bent ${leeftijd} jaar oud.`)
}
else{
    console.log(`Je bent te jong, je bent ${leeftijd} jaar oud`)
}

/* Om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
Schrijf een prompt die de leeftijd vraagt en zorg ervoor dat je een number uitkomt

var leeftijd = parseInt(window.prompt("Hoe oud ben je?"))
if(leeftijd >= 18){
    console.log(`Je mag deelnemen, je bent ${leeftijd} jaar oud.`)
}
else{
    console.log(`Je bent te jong, je bent ${leeftijd} jaar oud`)
}*/
