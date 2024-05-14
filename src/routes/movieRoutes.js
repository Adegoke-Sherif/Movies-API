import { Router } from "express"
import * as moviesController from "../controller/moviesController.js";

const movieRouter = Router();

// movieRouter.get("/", moviesController.getAllMovie)
movieRouter.post("/", moviesController.createMovie)
movieRouter.get("/:movieId", moviesController.getMovieById)
// movieRouter.put("/transfer", moviesController.updateMovie)



export default movieRouter