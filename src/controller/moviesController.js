import Movie from "../database/movies.schema.js";
import * as movieService from "../service/movieService.js";

export const createMovie = async (req, res) => {
  const dto = req.body;
  const movie = await movieService.create(dto)
  res.json({message: "Movie Created", movie})
}

export const getMovieById = async (req, res) => {
  const { movieId} = req.param;
  const movie = await movieService.getMovieById(movieId)
  res.json({message: "successful", movie})
}


export const getAllMovie = async (req, res) => {;
  const movie = await movieService.getAllMovie()
  res.json({message: "successful", movie})
}

// exports.createMovie = async (req, res) => {
//   try {
//     const movie = await Movie.create(req.body);

//     res.status(201).json({
//       data: {
//         movie
//       }
//     })
//   }catch(err) {
//     res.status(400).json({
//       message: err.message
//     })
//   }
  
// }


export default {
  createMovie,
  // getAllMovie,
  getMovieById,
  // updateMovie,
}