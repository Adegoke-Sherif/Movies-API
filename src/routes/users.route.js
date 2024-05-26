import { Router } from "express";
import * as userController from "../controller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js";

const userRoute = Router();

userRoute.get("/", authMiddleware, userController.getAllUsers);


export default userRoute;