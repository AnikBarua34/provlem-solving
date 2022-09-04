const products = [
    {name: "Laptop",price:52000, quantity:1},
    {name: "Shirt",price:500, quantity:5},
    {name: "Mobile",price:25000, quantity:1},
    {name: "Watch",price:1000, quantity:1}
]

let totalPrice = 0;
let totalProductPrice = 0;

for (product of products){
    totalProductPrice = product.price * product.quantity
    totalPrice +=totalProductPrice 
}
// console.log(totalPrice);



const products2 = [
    {name: "Laptop",price:10, quantity:1},
    {name: "Shirt",price:10, quantity:5},
    {name: "Mobile",price:10, quantity:1},
    {name: "Watch",price:10, quantity:1}
]

let totalCost = 0;

for (product of products2){
    // if we need quantity 
    // let totalProductPrice = product.price * product.quantity 
    // totalCost += totalProductPrice

    totalCost += product.price
}
// console.log(totalCost);

const productss = [
    {name: "Laptop",price:5454654, quantity:2},
    {name: "Shirt",price:5, quantity:1},
    {name: "Mobile",price:2, quantity:1},
    {name: "Watch",price:1, quantity:1}
]

let  totalPricee = 0;
// if we need quentity price
let totalPriceWithQuentity = 0;

for(product of productss){
    totalPriceWithQuentity = product.price * product.quantity
    totalPricee += totalPriceWithQuentity
}

console.log(totalPricee);