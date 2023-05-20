import express, { Application } from "express";
import morgan from "morgan";
import { config } from "./common/config";
import {errorHandler} from "./common/errors/error-handler";

const PORT = config.port;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.use(errorHandler)
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
