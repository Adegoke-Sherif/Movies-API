import * as movieService from "../service/movieService.js";

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json({ success: true, data: movies });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    if (!movie) {
      return res.status(404).json({ success: false, error: "Movie not found" });
    }
    res.status(200).json({ success: true, data: movie });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const movie = await movieService.addMovie(req.body);
    res.status(201).json({ success: true, data: movie });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);
    if (!movie) {
      return res.status(404).json({ success: false, error: "Movie not found" });
    }
    res.status(200).json({ success: true, data: movie });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete a movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await movieService.deleteMovie(req.params.id);
    if (!movie) {
      return res.status(404).json({ success: false, error: "Movie not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie };