export const liveMatchService = {
  async getLive() {
    try {
      const liveMatches = await getData();
      return liveMatches;
    } catch (error) {
      console.error("Error fetching data", error);
      throw new Error("Failed to fetch live matches");
    }
  },
};

async function getData() {
  try {
    const response = await fetch(
      "https://www.sofascore.com/api/v1/sport/football/events/live"
    );
    const jsonData = await response.json();
    return normalizeData(jsonData);
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}

// Function to normalize API response
function normalizeData(data) {
  return data.events.map((match) => ({
    id: match.tournament.id,
    tournament: match.tournament.name,
    slug: match.tournament.slug,
    category: match.tournament.category.name,
    season: match.season.name,
    roundInfo: match.roundInfo?.name || "N/A",
    status: match.description,
    homeTeam: {
      name: match.homeTeam.name,
      score: match.homeScore?.current || 0,
    },
    awayTeam: {
      name: match.awayTeam.name,
      score: match.awayScore?.current || 0,
    },
    statusTime: {
      timestamp: match.statusTime?.timestamp || null,
    },
  }));
}
