const numbers = [12, 98, 5, 41, 23, 78, 46];
const even = [];
 for( i = 0; i < numbers.length; i++){
    const change = numbers[i];
    if(change % 2 === 0){
        // console.log(change)
        even.push(change)
    }
 }
 console.log(even)