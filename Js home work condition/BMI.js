let weight = 70;
let height = 1.75;
const bmi = weight / (height * height);
// console.log(bmi)

if(bmi  < 18.5){
     console.log('you are underweight.')
}
else if(bmi >= 18.5){
    if(bmi <= 24.9){
        console.log('you are normal.')
    }
}
else if(bmi <= 25){
    if(bmi >= 29.9){
        console.log("you are overweight.")
    }
}
else{
    console.log('Otherwise, you are obese.')
}
