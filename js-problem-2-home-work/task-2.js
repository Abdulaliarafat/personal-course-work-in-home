function getMin(sentences){
    let small = sentences[0];
   for(const substr of small){
    if(substr.length > small.length){
        small = substr;
    }
   }
   return small;
}
const result = getMin(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
console.log(result)
//  sentences
// function getMin(sentences){
//     let words = sentences.split(" ");
//     let small =words[0];
//    for(const substr of words){
//     if(substr.length > small.length){
//         small = substr;
//     }
//    }
//    return small;
// }
// const result = getMin('To fix this, you can modify the function to accept an array of strings directly')
// console.log(result)