const { v4: uuid } = require("uuid");
const { Category } = require("./Category");
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { db }) => {
    const { name, description, price, image, quantity, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      price,
      image,
      quantity,
      categoryId,
    };
    db.products.push(newProduct);
    return newProduct;
  },
  addReviews: (parent, { input }, { db }) => {
    const { date, rating, comment, title, prodductId } = input;
    const newReview = {
      id: uuid(),
      date,
      rating,
      title,
      comment,
      prodductId,
    };
    db.reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },
  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.prodductId !== id);
    return true;
  },
  deleteReviews: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex((category) => category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  },
  updateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex((product) => product.id === id);
    if (index === -1) return null;
    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },
  updateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex((review) => review.id === id);
    if (index === -1) return null;
    db.reviews[index] = {
      ...db.reviews[index],
      ...input,
    };
    return db.reviews[index];
  },
};


// test