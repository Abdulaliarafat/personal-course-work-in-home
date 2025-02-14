
// for(let i = 11; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log('even', i)
//     }
//     console.log(i)
// }
let sum = 0;
for(i = 91; i <= 129; i++)
    // i % 2 !== 1  thay are same...........
    {
    if(i % 2 === 0){
        sum = sum + i;
        console.log('even',i)
    }
    console.log(i)
}
console.log('total',sum)

