import Movie from "../database/movies.schema.js"

export const createMovie = (dto) => {
  return Movie.create(dto);
}
export const getMovieById = (id) => {
  return Movie.getMovieById(id)
}