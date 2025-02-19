function getsmall(numbers){
   let min = numbers[0] 
for(const number of numbers){
    if(number < min){
        min = number;
    }
}
return min;
}
const result = getsmall([167, 190, 120, 165, 137])
console.log(result)