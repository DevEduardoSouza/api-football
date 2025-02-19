import { Router } from "express";
import { liveMatchController } from "../controllers/LiveMatchController.js";

const routes = Router();

routes.get("/live-match", liveMatchController.get);

export default routes;
