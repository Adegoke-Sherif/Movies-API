import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movieRoutes.js"
import { connect } from "../src/database/connection.js";
// import userRoute from "./routes/users.route.js";
// import blogRoute from "./routes/blog.route.js";
  
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3300 

//Middleware
app.use(express.json());

app.use("/api/v1/movies", movieRouter)
  
// // const getAllMovies = (req, res) => {
// //   res.status(200).json({
// //     count: movies.length
// //   })
// // }
// // movieRouter.get("/",getAllMovies);

// // app.get("api/v1/movies/:id", (req, res) => {
// //   console.log(req.params);

// //   res.send("Test movies")
// // })


// // movieRouter.post("/api/v1/movies", (req, res) => {
//   console.log(req.body)
//   res.send("created")
// })


//Routes
// app.use("/auth", authRoute);
// app.use("/users", userRoute);
// app.use("/blogs", blogRoute)
// //all Routes
// app.all("*", (req, res) => {
//   res.status(404);
//   res.json({
//   

connect().then(() => {
  console.log("Connected to MongoDB")  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
});