import express from "express";
import * as moviesController from "../controller/movie.controller.js"

const movieRouter = express.Router()

// Routes for movie
movieRouter.get("/", moviesController.getAllMovies)
movieRouter.get("/:id", moviesController.getMovieById)
movieRouter.post("/", moviesController.addMovie)
movieRouter.put("/:id", moviesController.updateMovie)
movieRouter.delete("/:id", moviesController.deleteMovie);

export default movieRouter;


