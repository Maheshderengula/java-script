//example 1:
for (let i=1; i <=5;i++){
    console.log(i);
}

//example 2:
for (let g = 7; g <=80;g++){
    console.log(g);  
}
//example for loop of.. (arrays):
let fruits = ["apple","banana","mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
//example for loop in (objects):
let emp ={id:101,name:"rahul",salary: 50000};
for (let key in emp){
    console.log(key,emp[key]);
}
/*//example arrays.foreach() (modern js):
let nums = [10,30,60];
nums.foreach((n)=>{
    console.log(n);
});*/
//Map()(transform data):
let salaries = [30000,40000,50000];
let updated =salaries.map(s=>s+5000);
console.log(updated);
//filter()(conditional loop):
let nums =[10,25,40,15];

let big  = nums.filter(n=>n>20);
console.log(big);

//
