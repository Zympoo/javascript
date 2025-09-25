let string = "";

for(let i = 0; i <= 99; i++){
    if(i < 10){
        string += `0${i},`;
    }
    else{
       if(i === 99){
           string += `${i}`;
       }
       else{
           string += `${i},`;
       }
    }
}
console.log(string);