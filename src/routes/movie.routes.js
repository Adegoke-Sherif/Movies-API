import express from "express";
import {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controller/movie.controller.js";

const movieRouter = express.Router()

// Routes for movie
movieRouter.get("/", getAllMovies)
movieRouter.get("/movies/:id", getMovieById)
movieRouter.post("/", addMovie)
movieRouter.put("/movies/:id", updateMovie)
movieRouter.delete("/movies/:id", deleteMovie);

export default movieRouter;
