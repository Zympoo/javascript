let getallen = [2, 8, 3, 5, 1]
let controleGetal = parseInt(window.prompt("Vul het getal in dat je wilt controleren"))
let gevonden = false;

for(let getal of getallen){
    if(getal === controleGetal){
        gevonden = true;
    }
}
if(gevonden){
    alert("Gevonden!")
}
else{
    alert("Niet gevonden!")
}