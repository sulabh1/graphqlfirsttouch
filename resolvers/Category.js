exports.Category = {
  products(parent, { filter }, context) {
    const categoryProducts = context.products.filter(
      (data) => data.categoryId === parent.id
    );

    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (data) => data.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
