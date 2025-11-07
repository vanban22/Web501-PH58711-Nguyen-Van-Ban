//bai1

// Function 1
const multiply=(a, b) => a*b;

// Function 2
const isPositive=number => number >= 0;

// Function 3
const  getRandomNumber=() => Math.random();

// Function 4
document.addEventListener("click", () =>{
  console.log("Clicked!");
});


//bai2
function createUser(name="Anonymous", age="18", isAdmin=false) {
  return {
    name,
    age,
    isAdmin,
  };
}

//bai3

// Hàm mergeArrays
const mergeArrays = (...arrays) => arrays.flat();

//Hàm sumAll
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

//Hàm createProduct
const createProduct = (
  name = "No name",
  price = 0,
  inStock = true
) => ({
  name,
  price,
  inStock,
});


// bai4

const shoppingCart = (customerName, ...products) => {
  return {
    customerName,
    products,
    totalItems: products.length,
  };
};
