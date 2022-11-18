const { ApolloServer } = require("apollo-server");
const { db } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Products");
const { Mutation } = require("./resolvers/Mutation");
const url = "localhost:4000";
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    db,
  },
});
server.listen().then(({}) => {
  console.log("server is ready at  " + url);
});
