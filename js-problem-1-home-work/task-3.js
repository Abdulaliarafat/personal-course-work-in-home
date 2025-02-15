function countVowels(str){
    let count = 0;
       const Vowels = 'aeiouAEIOU'
       for(const substr of str){
        if(Vowels.includes(substr)){
            count++
        }
       }
       return count
        
}
console.log(countVowels('bangladesh is my country'))