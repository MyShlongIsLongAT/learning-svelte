<script>
  import TeamGrid from "$lib/components/TeamGrid.svelte";
  export let data;
</script>

<div class="footballContainer">
  {#await data.teams}
    <p>loading</p>
  {:then teams}
    <h1>Bundesliga</h1>
    <TeamGrid {teams} />
  {/await}
</div>
