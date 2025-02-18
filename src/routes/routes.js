import { Router } from "express";
import { liveMatchController } from "../controllers/liveMatchController.js";

const routes = Router();

routes.get("/live-match", (req, res) => {
  liveMatchController.get(req, res);
});

export default routes;
