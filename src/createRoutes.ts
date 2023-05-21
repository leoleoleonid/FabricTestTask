import {Application} from "express";
// import UserRouter from "./modules/User/user.router";
import router from "./modules/Shelf/router";

export default function createRoutes(app: Application) {
    // app.use('/user', UserRouter)
    app.use('/shelf', router)
    // other routes ...

}