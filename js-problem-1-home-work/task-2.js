function findNumber(array,find){
    let count = 0;
      for(const number of array){
        if(number === find){
         count++
        }
      }
      return count
}
console.log(findNumber([5,6,11,11,11,12,98,5],5))
console.log(findNumber([5,6,11,12,98,5],25))