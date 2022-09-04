// ODD NUMBERS -bijor number
// i+=2 
// i = i + 2
for (let i=1; i <= 10; i += 2){
// console.log(i);
}

// // EVEN numbers - jor number 

 for (i=2; i<=10; i++){

 }
  let evenNumber = i++;
//     // console.log(evenNumber)
// }

// const data = [20,50,70,10,30,80,100] ;

// // console.log(data.indexOf(8))
// // console.log(data[8])
// for (i = 0 ; i< data.length ; i++){
//     // to see all elements from an array
//     // console.log(data[i])
// }
// const friend = 'anikaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
// const friends = [ 'anik', 'avik', 'susmoy', 'opy', 'niloy']
// // console.log(...friends)

// // console.log(friend.length)
// // to see all items from an array 
// for(i=0;i<friends.length;i++){
// // console.log(friends[i])
// }
// var num1 = "99.5";
// var num2 = 15 ; 
// console.log(parseFloat(num1+num2))


function isEven (number){
            if(number % 2 == 0){
                return true;
            }
            else{
                return false ;
            }
}
// console.log(isEven(13))

const datas =[10,12,13,14,15,10] ;

function findEvenNumber(){
    let newArray = [];
    for (data of datas){
        // console.log(data)
        if(data % 2 == 0 ){
                newArray.push(data)
        }
        
    }
    return newArray;
}
// console.log(findEvenNumber())















// find 1-10 odd numbers 
    for (i=1; i <=10; i+=2){
// console.log(i)
    }
    // find 1-10 even numbers
    for(let i= 2; i <=10; i+=2){
// console.log(i)
    }

    // take a number and tell that is it even or odd 

    // function isEven (number){
    //     if(number % 2 == 0){
    //         console.log('This is a jor or even number')
    //     }
    //     else{
    //         console.log('This is a Odd number')
    //     }
    // }
    // isEven(12);


//  for(let i = 2; i <=10; i+=2){
//      console.log(i)
//  }

// make a funtion and take an input and tell is it even or odd 

function isEven(number){
        if(number % 2 == 0){
            return true;
        }
        else{
            return false
        }
}
// console.log(isEven(11))

// find only odd numbers from the array 

// const allNumbers = [10,11,12,23,14,15,16,17,18,19,20,21] 
// let onlyEvenNumbers = [];
// for (number of allNumbers){
//     if(number % 2 ==0){
//         onlyEvenNumbers.push(number)
//     }
// }
// console.log(onlyEvenNumbers);



// show 1 - 10 even and odd numbers 
// odd - bijor

// for (i = 1; i <= 10; i +=2){
//     console.log(i)
// }

// find only odd numbers and show 
const allNumbers = [1,2,3,4,5,6,7,8,9,10]
let oddNumbers = [];

for(number of allNumbers){
if(number % 2 == 0){
 oddNumbers.push(number)
}
}
console.log(oddNumbers)