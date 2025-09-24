/* Boven de 18 volwassen, 12-18 tiener en onder 12 een kind **/
var leeftijd = parseInt(window.prompt("Hoe oud ben je"))

if (leeftijd >= 18){
    alert("Je bent volwassen.")
}
else if(leeftijd >= 12 && leeftijd < 18){
    alert("Je bent een tiener")
}
else{
    alert("Je bent een kind.")
}