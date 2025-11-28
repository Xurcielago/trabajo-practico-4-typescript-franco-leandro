let productName: string = "Arleigh Burke-class destroyer"; 
let productPrice: number = 18000000000; 

console.log(`Buque (producto): ${productName}, Precio: ${productPrice}`);

let productId: string | number; 

productId = "ABC101"; 
console.log(`ID (String): ${productId}`);

productId = 101; 
console.log(`ID (Número): ${productId}`);

interface Product { 
    name: string;
    price: number;
}

let myProduct: Product = {
    name: "Akizuki-class destroyer",
    price: 893000000
};

console.log("Naval Ship: myProduct:", myProduct);