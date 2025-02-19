import { liveMatchService } from "../services/liveMatchService.js";

export const liveMatchController = {
  async get(req, res) {
    try {
      const matches = await liveMatchService.getLive();
      res.json(matches);
    } catch (error) {
      res.status(500).json({ error: "Error fetching live matches" });
    }
  },
};
