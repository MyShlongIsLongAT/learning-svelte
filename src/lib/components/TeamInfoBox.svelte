<script>
  export let currentTeam;
</script>

<div class="infoContainer">
  <div class="infoGrid">
    <div class="teamDetail">
      <div class="teamName">{currentTeam.name}</div>
      <div class="foundingDate">since {currentTeam.founded}</div>
      <div class="website">
        <a href={currentTeam.website} target="_blank">Zur Website des {currentTeam.name}</a>
      </div>
    </div>
    <div class="teamEmblem">
      <img src={currentTeam.crest} alt={currentTeam.name} />
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 50%;
  }
  .infoContainer {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
  }

  .infoGrid {
    width: 60%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-color: #292929;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .teamDetail {
    text-align: left;
  }

  .teamName {
    font-size: 3vh;
    font-weight: bold;
  }

  .foundingDate {
    font-weight: bold;
  }

  .website{
    margin-top: 2vh;
    color: white
  }
</style>
