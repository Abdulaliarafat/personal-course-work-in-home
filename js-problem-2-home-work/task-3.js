function totalbuget(laptopt,tablet,mobile){
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  
   const totalLaptopBuget = laptopPrice * laptopt;
   const totaTablateBuget = tabletPrice * tablet;
   const totalMobileBuget = mobilePrice * mobile;

   const totalbuget = totalLaptopBuget + totaTablateBuget + totalMobileBuget;
   return totalbuget
}
const total = totalbuget(1,2,3)
console.log("total money required : "+ total + " tk")
