const { v4: uuid } = require("uuid");
exports.addProduct = (parent, args, context) => {
  const { name, description, quantity, price, image, onSale } = args.input;
  const newProduct = {
    id: uuid(),
    name,
    description,
    quantity,
    price,
    image,
    onSale,
  };
  context.products.push(newProduct);
  return newProduct;
};
