const phones = [
    {name: "Iphone", price: 56000},
    {name: "jphone", price: 46000},
    {name: "kphone", price: 36000},
    {name: "lphone", price: 26000}
]

let cheapestPhone = phones[0];
for(phone of phones){
    if(phone.price < cheapestPhone.price){
        cheapestPhone = phone ;
    }
}
// console.log(cheapestPhone);

const phonesList = [
    {name: "Iphone", price: 56000},
    {name: "jphone", price: 46000},
    {name: "kphone", price: 36000},
    {name: "mphone", price: 96000},
    {name: "lphone", price: 26000}
]
let cheapestPhone2 = phonesList[0]
for(phone of phonesList){
    if(phone.price < cheapestPhone2.price){
        cheapestPhone2 = phone
    }
}
// console.log(cheapestPhone2);

// find the lowest phone 
const phonesDetails = [
    {name: "Iphone", price: 6000},
    {name: "jphone", price: 46000},
    {name: "kphone", price: 36000},
    {name: "mphone", price: 96000},
    {name: "lphone", price: 26000}
]

let lowestPhone = phonesDetails[0];
for (phone of phonesDetails){
        if(phone.price < lowestPhone.price){
                lowestPhone = phone
        }
}
console.log(lowestPhone);