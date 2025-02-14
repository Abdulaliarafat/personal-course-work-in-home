let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
    Object.entries(myObject).forEach(([key, type]) =>{
        console.log(`key:${key} | type: ${type}`)
    })

    // Object.entries(myObject)
    // .forEach(([key, type]) =>
    //  {
    //  console.log(`Key: ${key} | type: ${type}`);
    //   });

   
    // for(const prop in myObject){
        
        // console.log(prop)
       
        // console.log(prop,'|', myObject[prop])

    // }