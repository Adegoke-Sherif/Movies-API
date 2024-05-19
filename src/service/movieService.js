import Movie from "../database/movie.schema.js";

export const getAllMovies = async (page = 1, limit = 10) => {
  try {
    //pagination
    const skip = (page - 1) * limit;
    const  movies = await Movie.find().skip(skip).limit(limit);
    // return movies;
    const total = await Movie.countDocuments();
    return { data: movies, meta: {page, limit, total }}
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
