exports.Query = {
  hello() {
    return "World";
  },
  products(parent, { filter }, context) {
    const ratings = [1, 2, 3, 4, 5];
    let filterProducts = context.products;

    if (filter) {
      if (filter.onSale) {
        filterProducts = filterProducts.filter((product) => product.onSale);
      }
      if (ratings.includes(filter.avgRating)) {
        filterProducts = filterProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          context.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= filter.avgRating;
        });
      }
    }
    return filterProducts;
  },
  product(parent, args, context) {
    const product = context.products.find((data) => data.id === args.id);

    !product && null;
    return product;
  },
  categories(parent, args, context) {
    return context.categories;
  },
  category(parent, args, context) {
    const category = context.categories.find((data) => data.id === args.id);
    !category && null;
    return category;
  },
  reviews(parent, args, context) {
    return context.reviews;
  },
  review(parent, args, context) {
    const review = context.reviews.find((data) => data.id === args.id);
    !review && null;
    return review;
  },
};
