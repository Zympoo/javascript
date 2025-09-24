var getal = parseInt(window.prompt("Geef je gewenst getal in"))

for(let i = getal.toString().length - 1; i >= 0; i--){
    console.log(getal.toString().charAt(i))
}