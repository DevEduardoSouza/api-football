import { leagues } from "../data/leagues.js";
import { nextMatchesService } from "../services/nextMatchesService.js";

export const nextMatchesController = {
  async getNextMatchesByLeague(req, res) {
    try {
      const leagueId = req.params.leagueId;

      const idIsValid = leagues.find((league) => league === leagueId);
      console.log(idIsValid);

      if (!idIsValid) {
        return res.status(404).json({ error: "League not found" });
      }

      const nextMatches = await nextMatchesService.get(idIsValid);
      res.json(nextMatches);
    } catch (error) {
      res.status(500).json({ error: "Error fetching live matches" });
    }
  },
};
