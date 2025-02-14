// let num = 1;
// while(num <= 10){
//     console.log(num)
//     if(num % 2 === 0){
//         console.log('even number', num)
//     }
//     num++;
// }

// let num = 78;
// while(num <= 98){
//     console.log(num)
//     if(num % 2 === 0){
//         console.log(' number', num)
//     }
//     num++;
// }

let num = 206;
let sum = 0;
while(num <= 311){
    if(num % 2 === 0){
        sum = sum + num;
        console.log('even', num)
    }
    console.log(num)
    num++
}
console.log('total even', sum)