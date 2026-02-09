//basic while loop:
let i = 1;

while(i<=5) {
    console.log (i);
    i++;

}
//print even numbers:
let g= 2;
while(g<=20){
    console.log(g);
    g+=2;
}

//sum of numbers:
let j =1;
let sum =0;
while (j <=10){
    sum+=j;
    g++;
}
console.log("sum:",sum);

//loop through an array:
let fruits =["apple","banana","mango"];
let y =0;
while (y<fruits.length){
    console.log(fruits[i]);
    i++;
}

//search element inn array :
let nums = [10,20,30,40,]
let m =0;
let found=false;

while(m< num.length){
    if(nums[m]===30){
        found=true;
        break;
    }
    m++;

}
console.log(found ?"found":"not found");
// remove items until condition met:
let tasks = ["a","b","c","d"];

while (tasks.length >2) {
    tasks.pop();

}
console.log(tasks);


