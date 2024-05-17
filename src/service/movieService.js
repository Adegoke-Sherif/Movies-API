import Movie from "../database/movie.schema.js";

export const getAllMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getMovieById = async (id) => {
  try {
    const movie = await Movie.findById(id);
    return movie;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const addMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);
    return movie;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateMovie = async (id, updateData) => {
  try {
    const movie = await Movie.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    return movie;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteMovie = async (id) => {
  try {
    const movie = await Movie.findByIdAndDelete(id);
    return movie;
  } catch (err) {
    throw new Error(err.message);
  }
};
