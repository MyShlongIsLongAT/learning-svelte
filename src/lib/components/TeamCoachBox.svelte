<script>
  export let coach;
  const { name, contract, nationality } = coach;
</script>

<div class="coachContainer">
  <h1>Coach</h1>
  <p>{name}</p>
  <p>{contract.start} - {contract.until}</p>
  <p>{nationality}</p>
</div>

<style>
  .coachContainer{
    width: 100%;
  }
</style>
