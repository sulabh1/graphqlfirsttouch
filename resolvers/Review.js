exports.Review = {
  products(parent, args, context) {
    console.log(parent);
    return context.products.filter((data) => data.reviewId === parent.id);
  },
};
