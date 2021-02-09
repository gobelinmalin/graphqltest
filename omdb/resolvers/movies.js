const fetch = require("node-fetch");

const baseURL = "http://www.omdbapi.com/";
const searchQueryKey = "?s=";
const movieIdQueryKey = "?i=";
const yearOptionalQueryKey = "&y=";
const apiKey = "&apikey=96c7d649";

const omdbFetcher = args => {
  const fullUrl = args.movieId
    ? findByMovieId(args.movieId)
    : searchFor(args.movieInput.title, args.movieInput.year);

  return fetch(fullUrl)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error.Error);
    });
};

const findByMovieId = id => baseURL + movieIdQueryKey + id + apiKey;

const searchFor = (title, year) => {
  return year
    ? baseURL + searchQueryKey + title + yearOptionalQueryKey + apiKey
    : baseURL + searchQueryKey + title + apiKey;
};

module.exports = {
  movies: async args => {
    try {
      const movies = await omdbFetcher(args);
      return movies.Search;
    } catch (e) {
      console.log(e);
    }
  },
  movie: async args => {
    try {
      const movie = await omdbFetcher(args);
      return movie;
    } catch (e) {
      console.log(e);
    }
  },
};
