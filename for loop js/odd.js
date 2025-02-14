// for(i = 61; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//         console.log('odd', i)
//     }
// }
let sum = 0;
 for( i = 51; i <= 85; i++){
    if(i % 2 !== 0)
        // i % 2 === 1   thay are same...........
        {
        sum = sum + i;
        console.log('odd', i)
    }
    console.log(i)
 }
 console.log('total sum',sum)