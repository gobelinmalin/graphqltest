const movieResolver = require("./movies");

const rootResolver = {
  ...movieResolver,
};

module.exports = rootResolver;
