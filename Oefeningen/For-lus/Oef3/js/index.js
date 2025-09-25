let string = "";
let vraag = parseInt(window.prompt("Hoeveel lijnen wil je tonen (even getallen)"))

for(let i = 1; i <= vraag / 2; i++){
    string += "*"
    console.log(string)
}
for(let i = vraag / 2; i >= 1; i--){
    string -= "*"
    console.log(string)
}