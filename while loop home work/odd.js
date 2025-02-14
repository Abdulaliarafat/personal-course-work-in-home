// let num = 1;
// while(num <= 10){
//     console.log(num)
//     if(num % 2 !== 0){
//         console.log('odd number', num)
//     }
//     num++;
// }
// let num = 61;
// let sum = 0;
// while(num <= 100){
//     console.log(num)
//     if(num % 2 !== 0){
//         sum = sum + num;
//         console.log("total", sum)
//         console.log('odd number', num)
//     }
//     num++;
// }

let num = 81;
 let sum = 0; 
while(num <= 131){
    if(num % 2 !== 0){
        sum = sum + num;
        console.log("odd", num)
    }
    console.log(num)
    num+=2
}
console.log('total odd numder 81 to 131', sum)