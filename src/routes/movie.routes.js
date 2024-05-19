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
movieRouter.get("/:id", getMovieById)
movieRouter.post("/", addMovie)
movieRouter.put("/:id", updateMovie)
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;
