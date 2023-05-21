import {Application} from "express";
import router from "./modules/Shelf/router";

export default function createRoutes(app: Application) {
    app.use('/shelf', router)
}