// const names = ['anik', 'avik','sojib', 'noyon', 'kaku','hannan','mannan','anik', 'avik'];
// const numbers = [10,20,30,40,10];

// function removeDuplicate(numbers){
//     let unique = [];
//     // for (let i = 0; i < names.length;i ++){
//     //     const element = names[i];
//     //     console.log(element);
//     // }

//     // for of for loop er short version 
//     for (const element of numbers){
// //    element e jodi na thake tyle add koro 
                // uniqe er moddhe jodi element ta na thake ... 
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }

// console.log(removeDuplicate(numbers));

// const names = ['anik', 'avik','sojib', 'noyon', 'kaku','hannan','mannan','anik', 'avik'];
// function removeDuplicate(){
//     let newArray = [];
// for(name of names ){
//     if(newArray.indexOf(name) == -1){
//         newArray.push(name)
//     }
// }
// return newArray;
// }

// console.log("New Array :",removeDuplicate());

const numbers = [11,12,13,14,15,16,17];
function findOddNumbers (){
    let newArray = [] ;
    for (number of numbers){
        if(number % 2 == 1){
            newArray.push(number);
            }
    }
    return newArray;
}

// console.log(findOddNumbers());

// remove duplicate number from an array 

const datas = [1,2,3,4,5,1,2] ;
function removeDuplicate(){
    let newArray = [];

    for(data of datas){
        
        if(newArray.indexOf(data) == -1){
            newArray.push(data);
          }
          
    }
    return newArray;
}

// console.log(removeDuplicate());

const datas2 = [10,20,30,10,20,30,]

function removeDuplicate2(){

    let newArray = []

    for(data of datas2){
        if(newArray.indexOf(data) == -1){
                newArray.push(data)
        }
    }
    return newArray;

}

// console.log(removeDuplicate2());


const numbersInArray = [10,20,30,10,20,30]
let newarray = []
function removeDuplicateNumbers(){
        for(number of numbersInArray){
            if(newarray.indexOf(number) == -1){
                newarray.push(number)
            }
        }
        return newarray
}
// console.log(removeDuplicateNumbers());



const allNumbers = [10,20,30,40,50,10,20,30,40,50]

function removeDuplicate3(){
    let newNumbers = []
    for(number of allNumbers){
            if(newNumbers.indexOf(number) == -1){
                newNumbers.push(number)
            }     
    }
    return newNumbers;
  
}
// console.log(removeDuplicate3());

const allNumbers2 = [110,120,130,140,150,110,120,130,140,150]



function findSingleNumbersOnly(){
    let singleNumbers =[];


for (number of allNumbers2){
    if(singleNumbers.indexOf(number) == -1){
            singleNumbers.push(number)
    }
}
return singleNumbers;
}
console.log(findSingleNumbersOnly());