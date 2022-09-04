/*Problem 1 
var name = "anik";
var age = 26;
var isMale = true;*/

// problem-2 
// var , let and const 
// var is a global scope , let and const are block scoper ! 
// let can be update or re-declered but const cant be update or re-declered
// let amount = 23 ;
// amount = 24;
// console.log(amount);

// const age = 26;
// age = 27 
// console.log(age);

// problem-3
function addTwo(num1,num2){
    sum = num1 + num2
    return sum;
} 
// console.log(addTwo(1,2));

// problem-4 check <,> , == , >=, <=, != 
// let number1 = 4;
// let number2 = 4;

// let number3 = number1 + number2 ;
// console.log(number3);
// if(number1 < number2){
//     console.log("number 1 is smaller then number 2");
// }
// else if(number1 > number2){
//     console.log("number 1 is greater then number 2");
// }

// else if(number1 == number2){
//     console.log("number 1 and number 2 are same");
// }
// else if(number1 != number2){
// console.log("Number 1 is not same as number 2");
// }
// else if(number1 <= number2){
// console.log("number 1 number 2 er ceye choto kinba soman")
// }
// else if(number1 >= number2){
// console.log("number 1 number 2 er ceye boro othoba soman");
// }
// else{
//     console.log("")
// }

// problem-5  && ||
// proeblem-6 
// while loop to find 1-19 odd number 
let i = 1;
while(i <=19){
    i+=2
    // console.log(i)
}

for (i = 1; i <= 20; i+=2){
    // console.log(i)
}

// proeblem-7
const numbers = [10,20,30,40,50,60,70,80,90,100]
// change the 4th element 
// name[3]=11
// name.pop(10)
// add two element from the array 
// let sum = name[2]+name[4]
// console.log(...name)

// for(i = 0; i <= name.length; i++ ){
//     console.log(i)
// }
let newArray = [];
for(number of numbers){
    if(number < 80){
        newArray.push(number)
    }
}
// console.log(newArray);
// problem-11 

function multipleThree(num1,num2,num3){
    let multiply = num1 * num2 * num3
    return multiply;
}

// console.log(multipleThree(2,2,4))

const details = {
    name: "anik",
    age: 26,
    gender: "male"
}
details.age = 30

// console.log(details)