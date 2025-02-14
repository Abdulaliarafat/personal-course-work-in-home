const first = 'abdul ali arafat';

function capitalizeWords(str) {
  return str.split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
}

console.log(capitalizeWords(first)); 
// Output: "Abdul Ali Arafat"
