import express from "express";
import UserController from "./user.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = UserController.createInstance();
  const response = await controller.create(req.body);
  return res.send(response);
});

export default router