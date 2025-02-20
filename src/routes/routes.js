import { Router } from "express";
import { liveMatchController } from "../controllers/LiveMatchController.js";
import { nextMatchesController } from "../controllers/nextMatchesController.js";

const routes = Router();

routes.get("/live-match", liveMatchController.get);

routes.get(
  "/next-matches/:leagueId",
  nextMatchesController.getNextMatchesByLeague
);

export default routes;
