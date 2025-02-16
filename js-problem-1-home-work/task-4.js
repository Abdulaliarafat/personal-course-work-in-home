function findSentences(sentences){
    let words = sentences.split(" ");
    let longest = " ";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(findSentences('I am learning Programming to become a programmer'));