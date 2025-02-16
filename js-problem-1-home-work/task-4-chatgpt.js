function findLongestWord(sentence) {
    let words = sentence.split(" "); // Split the sentence into words
    let longest = ""; // Variable to store the longest word

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i]; // Update longest word if current word is longer
        }
    }

    return longest;
}

console.log(findLongestWord("I am learning Programming to become a programmer"));


function findLongestWord(sentence) {
    let words = sentence.split(" "); // Split the sentence into words
    let longest = ""; // Initialize longest word variable

    for (let word of words) { 
        if (word.length > longest.length) {
            longest = word; // Update longest if current word is longer
        }
    }

    return longest;
}

console.log(findLongestWord("I am learning Programming to become a programmer")); 