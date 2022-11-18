const { products } = require("../db");
exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    // console.log(parent)
    // const categoryId = parent.id;
    const categoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    let filterCategoryProduct = categoryProducts;
    if (filter) {
      if (filter.onSale === true) {
        filterCategoryProduct = filterCategoryProduct.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filterCategoryProduct;
  },
};
