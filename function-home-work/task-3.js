function avarege(numbers){
   const len = numbers.length 
   let sum = 0;
    for(const number of numbers){
        
        sum = sum + number; 
    }
   return sum / len;
}
console.log(avarege([20,50,60,70]))