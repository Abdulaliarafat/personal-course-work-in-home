
const comment = 'my name is abdul ali arafat';

function containsAllVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.every(vowel => str.toLowerCase().includes(vowel));
}

console.log(containsAllVowels(comment)); 