export const nextMatchesService = {
  async get(idleague) {
    try {
      const nextMatches = await getData(idleague);

      console.log(nextMatches.length);

      return nextMatches;
    } catch (error) {
      res.status(500).json({ error: "Error fetching live matches" });
    }
  },
};

async function getData(idleague) {
  try {
    const response = await fetch(
      `https://www.sofascore.com/api/v1/unique-tournament/17/season/${idleague}/events/round/27`
    );
    const jsonData = await response.json();

    return normalizeApiData(jsonData);
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}

function normalizeApiData(apiData) {
  return apiData.events.map((event) => ({
    id: event.id,
    tournament: {
      name: event.tournament.name,
      country: event.tournament.category.alpha2,
      category: event.tournament.category.name,
      primaryColor:
        event.tournament.uniqueTournament?.primaryColorHex || "#FFFFFF",
      secondaryColor:
        event.tournament.uniqueTournament?.secondaryColorHex || "#000000",
    },
    season: event.season.year,
    round: event.roundInfo.round,
    status: {
      code: event.status.code,
      description: event.status.description,
      type: event.status.type,
    },
    homeTeam: {
      id: event.homeTeam.id,
      name: event.homeTeam.name,
      shortName: event.homeTeam.shortName,
      score: event.homeScore.current,
      displayScore: event.homeScore.display,
      redCards: event.homeRedCards || 0,
    },
    awayTeam: {
      id: event.awayTeam.id,
      name: event.awayTeam.name,
      shortName: event.awayTeam.shortName,
      score: event.awayScore.current,
      displayScore: event.awayScore.display,
      redCards: event.awayRedCards || 0,
    },
    startTimestamp: event.startTimestamp,
    winnerCode: event.winnerCode,
    slug: event.slug,
    hasStatistics: event.hasEventPlayerStatistics,
    isLive: event.tournament.isLive,
  }));
}
