let age = 50;
price = 800;
const students  = false;
if(age < 10){
    console.log('free')
}
else if(students  == true){
   discount = price * 50 / 100;
   pay = price - discount;
   console.log(pay)
}
else if(age >= 60){
    discount = price * 15 / 100;
   pay = price - discount;
   console.log(pay)
}
else{
    console.log(price)
}
