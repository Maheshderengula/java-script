let number=[1,2,3,4,5,6,7,8,9,10]
for (let i=0; i<number.length; i++){
    console.log(number[i]);
}

// print all even element in array
for (let j=2; j<=10; j=j+2){
    console.log(j);
}


// sum of all array element
// for loop
let sum =0
for (let k=0; k<number.length; k++){
    sum=sum+number[k]
}
console.log(sum);


// for of loop


let sum2=0
for(ele in number){
    sum2=sum2+number[ele]
} 
console.log(sum2);