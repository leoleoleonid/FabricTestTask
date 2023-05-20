import express, { Application } from "express";
import morgan from "morgan";
import {config} from "./common/config";

const PORT = config.port;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.get("/ping", async (_req, res) => {
    res.send({
        message: "pong",
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});