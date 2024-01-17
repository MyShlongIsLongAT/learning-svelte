<script>
  export let player;
  let { name, nationality, dateOfBirth } = player;
</script>

<div class="playerContainer">
  <div class="playerBox">
    <p>{name}</p>
    <p>{dateOfBirth}</p>
    <p>{nationality}</p>
  </div>
</div>

