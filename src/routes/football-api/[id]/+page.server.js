export const load = async ({ parent, params }) => {
  const currentTeamId = params.id;
  const { teams } = await parent();

  const currentTeam = teams.filter(
    (team) => team.id === parseInt(currentTeamId),
  )[0];

  const positions = [... new Set(currentTeam.squad.map(player => player.position))]; 

  return {
    currentTeam: currentTeam,
    positions: positions,
  };
};
