<script>
  export let teamCompetitions;
</script>

<div class="competitionInfoBox">
  <div class="competitionFlex">
    {#each teamCompetitions as competition}
      <div>
        <img src={competition.emblem} alt={competition.name} />
      </div>
    {/each}
  </div>
</div>

<style>
  img {
    width: 100px;
  }

  .competitionInfoBox {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
  }

  .competitionFlex {
    width: 60%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-color: #292929;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
