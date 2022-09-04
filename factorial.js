// 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1;
// for loop is the sortest of while loop 

function getFactorial (number){
 let factorial = 1;
    for(i = 1; i<=number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

// while loop
function getFactorial2(number){
    
    let factorial = 1;
    let i = 1;
    
    while(i<=number){
        i++;
    factorial = factorial * i ;
    
    }
    return factorial;
}

// kono function e dhukar jonno sekhane breakpoint diye f11 
// tarpor f11 
// console.log(getFactorial2(7));

function getFactorial3(userNumber){

        let factorial = 1;
        let i = 1;

        while(i <= userNumber){
                factorial = factorial * i;
                i++;
        }
        return factorial ;
}
// console.log(getFactorial3(7));

function findFactorailNumber (Usernumber){
        let factorial = 1;
        for (i = 1; i <= Usernumber ; i++){
            factorial = factorial * i
        }
        return factorial;
}
console.log(findFactorailNumber(7))