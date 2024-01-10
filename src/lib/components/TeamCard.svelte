<script>
  export let teamLogo;
  export let id;
</script>

<a href="/football-api/{id}">
  <div class="cardContainer">
    <img src={teamLogo} alt="team logo" />
  </div>
</a>

<style>
  img {
    width: 80px;
    height: 80px;
  }
  .cardContainer {
    width: 300px;
    height: 100px;
    background-color: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
</style>
