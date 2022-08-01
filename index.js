const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Review } = require("./resolvers/Review");
const { categories } = require("./models/categories");
const { products } = require("./models/products");
const { reviews } = require("./models/reviews");
const { Mutation } = require("./resolvers/mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Review,
    Mutation,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`listening to the server ${url}`);
});
