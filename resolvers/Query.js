const { products, categories, reviews } = require("../db");
exports.Query = {
  hello: (parent, args, context) => "World",
  products: (parent, { filter }, { db }) => {
    let filterProduct = db.products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filterProduct = filterProduct.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterProduct = filterProduct.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }
    return filterProduct;
  },
  product: (parent, { id }, { db }) => {
    // console.log(args)
    // const {id} = args;
    return db.products.find((product) => product.id === id);
  },
  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) => {
    // const {id} = args;
    return db.categories.find((category) => category.id === id);
  },
};
