//bai1
// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Hiện tại in ra 3,3,3
    }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2


//bai2
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
// Tạo một object student với const
const student = {
    name: "ThuyTien",
    age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student

student.grade = "A";

student.age = 21;

console.log(student);

//bai3 Tạo template cho email thông báo

const user = {
    firstName: "Nguyen",
    lastName: "Van A",
    product: "Laptop Dell XPS",
    price: 25000000,
    orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = ` xin chao ${user.firstName} ${user.lastName} cam on ban da mua ${user.product}voi gia ${user.price} vao ngay ${user.orderDate}`;// Viết template ở đây 

console.log(emailTemplate);

//bai4 // Tạo HTML template

const product = {
    name: "iPhone 15",
    price: 20000000,
    discount: 10,
    inStock: true,
};

// Tính giá sau giảm (code này đã có sẵn)
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
// Mình dùng biểu thức 3 ngôi (ternary operator) để kiểm tra "inStock"
const productCard = `
  San pham${product.name}
    Giá gốc: ${product.price.toLocaleString('vi-VN')} VND
  
    Giá khuyến mãi: ${finalPrice.toLocaleString('vi-VN')} VND (Giảm ${product.discount}%)
  
    Tình trạng: ${product.inStock ? 'Còn hàng' : 'Hết hàng'}
`;
console.log("\n--- TEMPLATE HTML ---");
console.log(productCard);

//bai 5

