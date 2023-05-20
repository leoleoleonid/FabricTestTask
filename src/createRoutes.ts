import {Application} from "express";
import UserRouter from "./modules/User/user.router";

export default function createRoutes(app: Application) {
    app.use('/user', UserRouter)
    // other routes ...

}