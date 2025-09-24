var getal = parseInt(window.prompt("Geef je gewenst getal in"))

for(let i = 1; i <= getal; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}