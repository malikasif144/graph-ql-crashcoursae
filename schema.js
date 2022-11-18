const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReviews(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReviews(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateInputCategory): Category
    updateProduct(id: ID!, input: updateInputProduct): Product
    updateReview(id: ID!, input: updateInputReview): Review
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    quantity: Int!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    name: String
  }
  input updateInputCategory {
    name: String
  }
  input AddProductInput {
    name: String!
    description: String!
    price: Float!
    image: String!
    quantity: Int!
    categoryId: String!
  }
  input updateInputProduct {
    name: String!
    description: String!
    price: Float!
    image: String!
    quantity: Int!
    categoryId: String
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
  input updateInputReview {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
