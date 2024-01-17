<script>
  import TeamCoachBox from "$lib/components/TeamCoachBox.svelte";
  import TeamPlayerBox from "$lib/components/TeamPlayerBox.svelte";
  export let squad;
  export let coach;
  export let positions;

  let positionPlayers = [];
</script>

<div class="squadWrapper">
  <div class="squadContainer">
    <TeamCoachBox {coach} />
    <div class="squadGrid">
      {#each positions as position}
        <h2>{position}</h2>
        <div class="squadPlayers">
          {#each squad as player}
            {#if player.position === position}
              <TeamPlayerBox {player} />
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .squadWrapper {
    padding: 10px;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
  }

  .squadContainer {
    width: 60%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-color: #292929;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .squadPlayers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
</style>
