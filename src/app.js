import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movie.routes.js"
import { connect } from "../src/database/connection.js";

dotenv.config();
const PORT = process.env.PORT || 3300;

const app = express();

//MiddleWare
app.use(express.json());
app.use("/movies", movieRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.all("*", (req, res) => {
  res.status(404).jsonp({ message: "Page not found"});
})

connect().then(() => {
  console.log("Connected to MongoDB")
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
});
