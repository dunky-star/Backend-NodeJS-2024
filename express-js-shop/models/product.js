const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    // static allows calling the method on the class itself directly without instantiating.
    return products;
  }
};
