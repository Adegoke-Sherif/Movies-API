import mongoose from "mongoose";
const movieSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name is a required field"],
        unique: true,
        trim: true
      },
      description: {
        type: String,
        required: [true, "Description is a required field"],
        trim: true
      }, 
      duration: {
        type: Number,
        required: [true, "Duration is a required field"]
      },
      ratings: {
        type: Number,
      },
      totalRating: {
        type: Number
      },
      releaseYear: {
        type: Number,
        required: [true, "Release Year is required field!"]
      },
    }, 
     
  );
  const Movie = mongoose.model("Movie", movieSchema);
  
  export default Movie;