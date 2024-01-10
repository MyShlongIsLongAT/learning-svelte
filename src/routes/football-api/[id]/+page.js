export const load = async ({ parent, params }) => {
  const currentTeamId = params.id;
  const { teams } = await parent();

  const currentTeam = teams.filter(
    (team) => team.id === parseInt(currentTeamId),
  )[0];

  return {
    currentTeam: currentTeam,
  };
};
