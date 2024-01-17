<script>
  import TeamInfoBox from "$lib/components/TeamInfoBox.svelte";
  import TeamCompetitionBox from "$lib/components/TeamCompetitionBox.svelte";
  import TeamSquadBox from "$lib/components/TeamSquadBox.svelte";
  export let data;

  const { currentTeam, positions } = data;
  const { squad, coach, runningCompetitions} = currentTeam;
</script>

<TeamInfoBox {currentTeam} />
<TeamCompetitionBox {runningCompetitions} />
<TeamSquadBox {squad} {coach} {positions}/>
