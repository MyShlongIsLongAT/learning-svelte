<script>
  export let runningCompetitions;
</script>

<div class="competitionInfoContainer">
  <div class="competitionFlex">
    {#each runningCompetitions as competition}
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

  .competitionInfoContainer {
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
