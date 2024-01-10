<script>
  import TeamInfoBox from "$lib/components/TeamInfoBox.svelte";
  import TeamCompetitionBox from "../../../lib/components/TeamCompetitionBox.svelte";
  export let data;

  const currentTeam = data.currentTeam;
</script>

<TeamInfoBox {currentTeam} />
<TeamCompetitionBox teamCompetitions={currentTeam.runningCompetitions} />
