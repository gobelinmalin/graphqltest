const express = require("express");
const app = express();
const {graphqlHTTP} = require("express-graphql");
const port = 4000;

const graphQlSchema = require("./omdb/schema/schema");
const graphQlResolvers = require("./omdb/resolvers/index");

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server ${port}`);
});

const meaningOflife = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("")
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};
