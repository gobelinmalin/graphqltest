const {buildSchema} = require("graphql");

module.exports = buildSchema(`
  """
  A MovieType refers to available attributes for Movie
  """
  type MovieType {
    "Movie ID from OMDb"
    imdbID: ID!
    "Title of a movie"
    Title: String!
    "Released year"
    Year: String!
    "Released date"
    Released: String!
    "Small plot about the storyline"
    Plot: String!
    "Link to movie poster"
    Poster: String!
  }
  input MovieInput {
    title: String!
    year: String
  }
  type RootQuery {
    movies(movieInput: MovieInput): [MovieType!]!
    movie(movieId: String!): MovieType!
  }
  schema {
    query: RootQuery
  }
`);
