

class Car{
  constructor(brand , price){
    this.brand = brand;
    this.price = price;
  }
}

let car1 = new Car("Honda" , 50000000);
const detailsOfCar = (obj)=>{
  console.log("Brand is : "+ obj.brand + " and Price is : "+ obj.price);
}
detailsOfCar(car1);
