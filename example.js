let cars=[ 
{ "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" }, 
{ "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" }, 
{ "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" }, 
{ "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" }, 
{ "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" }, 
{ "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" }, 
{ "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" }, 
{ "brand": "Mahindra", "model": "Thar", "price": 1600000, "color": "Black" }, 
{ "brand": "Honda", "model": "Amaze", "price": 850000, "color": "White" }, 
{ "brand": "Honda", "model": "City", "price": 1400000, "color": "Red" }, 
{ "brand": "Toyota", "model": "Glanza", "price": 900000, "color": "Blue" }, 
{ "brand": "Toyota", "model": "Innova Crysta", "price": 2200000, "color": "Silver" }, 
{ "brand": "Kia", "model": "Seltos", "price": 1500000, "color": "Black" }, 
{ "brand": "Kia", "model": "Sonet", "price": 1100000, "color": "Grey" }, 
{ "brand": "Renault", "model": "Kwid", "price": 550000, "color": "Yellow" }, 
{ "brand": "Renault", "model": "Triber", "price": 800000, "color": "White" }, 
{ "brand": "Skoda", "model": "Slavia", "price": 1400000, "color": "Blue" }, 
{ "brand": "Volkswagen", "model": "Virtus", "price": 1500000, "color": "Red" }, 
{ "brand": "MG", "model": "Hector", "price": 1800000, "color": "White" }, 
{ "brand": "Nissan", "model": "Magnite", "price": 900000, "color": "Silver" } 
] 
//20 JavaScript ES6 Assignments Using Cars Data 
//1. Use map() to extract only the car models.

const models = cars.map (car=> car.model);

//2. Use filter() to get cars priced below 10 lakhs.


const affordable = cars.filter(car=> car.price<1000000);

//3. Use reduce() to calculate the total price of all cars.

const totalprice = cars.reduce((sum,car)=>sum +car.price,0);

//4. Use arrow functions to return all car brands in uppercase. 

const brandsupper = cars.map(car => car.brand.toUpperCase());

//5. Use object destructuring to extract brand and model from the first car. 

const { brand,model}= cars[0];

//6. Use array destructuring to extract the first 3 cars into separate variables. 

const[car1,car2,car3] = cars;

//7. Create a new array using the spread operator that adds a new car to the existing list.

const newcars =[...cars,{brand:"tesla",model:"model 3",price:3500000,color:"white"}];

//8. Use find() to get the first car with the color 'Black'. 

const Blackcar = cars.find(car => car.price >2000000);

//9. Use some() to check if any car costs more than 20 lakhs. 

const hasluxury = cars.some(car => car.price > 2000000);

//10. Use every() to check if all cars have a price more than 5 lakhs. 

const allexpensive = cars.every(car => car.price>500000);


//11. Sort the cars by price using ES6 arrow function. 

const sortedbyprice = [...cars].sort((a,b) =>a.price-b.price);

//12. Create a class Car with constructor (brand, model, price) and create 3 objects.
class car {
    constructor(brand,model,price){
        this.brand = brand;
        this.model =model;
        this.price = price;
    }
} 
const c1 = new car ("maruti suzuki","swift",650000);
const c2 = new car("hyundai","i20",900000);
const c3 = new car("tata","nexon",1200000);


//13. Use template literals to print 'Model costs '. 

cars.forEach(car => console.log(`${car.model} costs ${car.price}`));

//14. Create a function with default parameters to apply 10% discount if no discount value is passed. 

function applydiscount(price,discount = 0.1){
    return price -price * discount;
}
//15. Use ES6 modules: create a file exporting cars array and import it into another file. 

// cars.js
export default cars;

// main.js
import cars from './cars.js';

//16. Create a new array of cars using map() that adds a new key onRoadPrice = price + 50000. 

const carsWithOnRoad = cars.map(car => ({ ...car, onRoadPrice: car.price + 50000 }));


//17. Use filter() + map() to get model names of all red-colored cars.

const redModels = cars.filter(car => car.color === "Red").map(car => car.model);

//18. Use optional chaining to safely access cars[25]?.model. 

const maybeCar = cars[25]?.model;

//19. Use Set to store unique car colors.
const uniquecolor = new set(cars.map(car => car.color));

//20. Create a Promise that resolves if cars array length is 20, otherwise rejects.

const checkCars = new Promise((resolve, reject) => {
  cars.length === 20 ? resolve("Valid dataset!") : reject("Invalid dataset!");
});
