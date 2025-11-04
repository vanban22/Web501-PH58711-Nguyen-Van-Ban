function createBook(title, author, year, price) {
  const discountKey = "calculateDiscount";

  return {
    title,
    author,
    year,
    price,

    getBookInfo() {
      return `📖 ${this.title} - Tác giả: ${this.author}, Năm: ${this.year}, Giá: ${this.price.toLocaleString()}đ`;
    },

    [discountKey](percent) {
      const discountedPrice = this.price * (1 - percent / 100);
      return `Giá sau giảm ${percent}%: ${discountedPrice.toLocaleString()}đ`;
    },
  };
}

const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));