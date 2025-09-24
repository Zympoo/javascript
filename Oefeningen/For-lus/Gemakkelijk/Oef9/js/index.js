var string = "";
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0) {
        if(i === 30){
            string += i;
        }
        else{
            string += i + ", ";
        }
    }
}
console.log(string);