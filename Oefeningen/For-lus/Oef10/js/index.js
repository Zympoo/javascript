let tafel = parseInt(window.prompt("Welke tafel wil je zien?"));
let eindgetal = parseInt(window.prompt("Welke eindgetal wil je?"));

for(let i = 1; i <= eindgetal; i++){
    console.log(`${tafel} x ${i} = ${tafel * i}`)
}