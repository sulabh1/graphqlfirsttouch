const { v4: uuid } = require("uuid");

exports.addCategory = (parent, { input }, { categories }) => {
  const { name } = input;
  const newCategory = {
    id: uuid(),
    name,
  };
  categories.push(newCategory);
  return newCategory;
};
