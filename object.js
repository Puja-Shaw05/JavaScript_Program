

/* We can create object in 3 way
   1. Literal
   2. Constructor Object
   3. Constructor Funtion 
*/
// Literal Way ****************************************
const obj = {
  name : "Puja",
  age : 23,
  degree : "B.Tech",
  add : "Kolkata",
}

console.log(obj.name);
//update name
obj.name = "Puja Shaw";
console.log(obj.name);
//add university name
obj.university = "MAKAUT"
console.log(obj);
//delete 
delete obj.age
console.log(obj);

// Constructor Object *******************************
let obj2 = new Object();
obj2.name = "Sonty";
obj2.age = 22;
console.log(obj2);


// ******************** Constructor Function  **************************
function Mobile(a ,b)
{
  console.log(a);
  console.log(b);
}
new Mobile("Poco" , "SamSung");

// ********************************* NEXTED OBJECT *************************
let obj3 = {
  name : "Ahana",
  age : 25,
  email : "A123@gmail.com",
  phoneNo : 9865325467,
  address : {
      state : "West Bengal",
      city : "Kolkata",
      pincode : 700077,
  }
};

console.log(obj3.address.city);

// ***************************  Function inside the object  ***************************
  let obj4 = {
    movie : "Pushpa",
    movie2 : "Siddat",
    ticket : function(){
      console.log("Ticket Booked");
    }
  }
obj4.ticket();

// ***********************  Nested Function inside object  *****************************
let obj5 = {
    movie : "Pushpa",
    movie2 : "Siddat",
    ticket : function(){
      console.log("Ticket Booked");
      function(){
        console.log("Booking Failed");
      }
      return x;
    }
  }
obj4.ticket()();
    













