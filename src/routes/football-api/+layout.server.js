import { FOOTBALL_API_KEY } from '$env/static/private'

export let load = async () => {
  const url = "https://api.football-data.org/v4/competitions/BL1/teams";
  const header = {
    headers: {
      "x-auth-token": FOOTBALL_API_KEY,
    },
  };
  const response = await fetch(url, header);
  const bundesligaData = await response.json();

 return {
    teams: bundesligaData.teams,
  };
}
