import { Router } from "express";
import * as userController from "../controller/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.Middleware.js";

const userRoute = Router();

userRoute.use(authMiddleware)

userRoute.get("/", authMiddleware, adminMiddleware, userController.getAllUsers);


export default userRoute;