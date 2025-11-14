//bai1
function getFirstLast(array) {
  const [first, , ,last]=array;
  return [first,last];
}
console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

function swapElements(arr) {
   const newArr = [...arr];       
  [newArr[1], newArr[3]] = [newArr[3], newArr[1]]; 
  return newArr;
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

// bai2
const user = {
    id: 1,
    personalInfo: {
        name: "javascript",
        contact: {
            email: "javascript@email.com",
            phone: "123-456-7890",
        },
    },
};

function getUserInfo(user) {
    const {
        personalInfo: {
            name: userName, 
            contact: { email } 
        }
    } = user;

    return { name: userName, email };
}

console.log(getUserInfo(user));


function createProduct({ name, price, category = "general", inStock = true }) {

    return { name, price, category, inStock }; 
}

const product = createProduct({ name: "Laptop", price: 999 });

console.log(product);


//bai3

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

console.log("Start delay...");
delay(2000).then(() => {
  console.log("2 seconds passed");
});


function fetchForUrl(url) {
  console.log(`Fetching data from: ${url}`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data for ${url} retrieved`); 
    }, Math.random() * 500 + 100); 
  });
}

function fetchMultipleData(urls) {
  const fetchPromises = urls.map(url => fetchForUrl(url));
  return Promise.all(fetchPromises);
}
const apiUrls = ["/api/user/1", "/api/user/2", "/api/posts"];
console.log("Start fetching multiple data...");

fetchMultipleData(apiUrls).then(users => {
  console.log("\n--- All data retrieved successfully ---");
  console.log(users);

}).catch(error => {
  console.error("One of the fetches failed:", error);
});

//bai4

async function processOrder(orderId) {
  const order = await getOrder(orderId);
  const user = await getUser(order.userId);
  const products = await getProducts(order.productIds);
  return { order, user, products };
}


async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error(`API Call failed for ${apiFunction.name}:`, error);
    return { success: false, data: null, error: error.message || "Unknown error" };
  }
}