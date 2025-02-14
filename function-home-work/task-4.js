
function count_zero(binaryString) {
    let count = 0;
    for (let char of binaryString)
        console.log(char) {
        if (char === "0") {
            count++;
        }
    }
    return count;
}


console.log(count_zero("100010010")); 