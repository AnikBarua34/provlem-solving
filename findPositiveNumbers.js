const datas=[10,20,30,40,-10,80]


let positiveNumbers = [];
function findPositiveNumbers(){
        for(data of datas){
                if(data >  -1){
                    positiveNumbers.push(data);
                    
                }
                
        }
        return positiveNumbers;
        
}

// console.log(findPositiveNumbers());
const numbers=[110,210,310,140,-110,810]

let positiveNumberss = [];

for(number of numbers){
                if(number > -1){
                 positiveNumberss.push(number)
                }
}
console.log(positiveNumberss);