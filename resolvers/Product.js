exports.Product = {
  categories(parent, args, context) {
    return context.categories.filter((data) => data.productId === parent.id);
  },
  reviews(parent, args, context) {
   // console.log(context.reviews);
    return context.reviews.filter((data) => data.productId === parent.id);
  },
};
