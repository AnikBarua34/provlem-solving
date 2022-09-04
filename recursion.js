// let sum = 0;
// for(i = 1; i<=6 ; i++){
//   sum+=i 
// }
// console.log(sum)

// reverse 6 - 1
// let sum2 = 0;
// for (let i = 6; i>=1; i--){
//     sum2 += i
// }
// console.log(sum2);

function recursionSum(i){
    if(i == 1){
        return 1;
    }
    return i + recursionSum(i - 1)
}

// console.log(recursionSum(6));

const name = "anik barua turjoy"
let newName = ""
function reverseName(n){

    for (i = n.length -1 ; i>= 0 ; i--){
            newName+= n[i]
    }
    return newName
}
console.log(reverseName("anik barua turjoy"));