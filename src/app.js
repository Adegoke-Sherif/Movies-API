import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movie.routes.js"
import userRouter from "./routes/user.router.js";
import { connect } from "../src/database/connection.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 3300;

const app = express();

//MiddleWare
app.use(express.json());
app.use("/movies", movieRouter)
app.use("/user", userRouter)
app.use("/auth", authRouter)

app.get("/", (req, res) => {
  res.send("Hello World")
})

// for all routes
app.all("*", (req, res) => {
  res.status(404).jsonp({ message: `Page ${req.originalUrl} not found on the server`});
})

connect().then(() => {
  console.log("Connected to MongoDB")
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
});
