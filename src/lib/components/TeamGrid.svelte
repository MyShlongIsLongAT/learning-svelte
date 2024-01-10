<script>
  import TeamCard from "$lib/components/TeamCard.svelte";
  export let teams = [];
</script>

<div class="gridContainer">
  <div class="teamGrid">
    {#each teams as { id, crest } ( id )}
      <TeamCard teamLogo={crest} {id} />
    {/each}
  </div>
</div>

<style>
  .gridContainer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .teamGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5vh;
    column-gap: 5vw;
  }

  @media only screen and (max-width: 1100px) {
    .teamGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 750px) {
    .teamGrid {
      grid-template-columns: 1fr;
    }
  }
</style>
