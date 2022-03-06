<script>
  import Peer from "./../components/peer.svelte";
</script>

<main>
  <h1>Welcome To The Room</h1>

  <section class="peers">
    <Peer />
  </section>
  <div class="buttons">
    <button class="mute">Mute</button>
    <button class="leave">Leave Room</button>
  </div>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    width: 100%;
    background: #729dc3;
    background: -webkit-linear-gradient(top left, #729dc3, #3ade2a);
    background: -moz-linear-gradient(top left, #729dc3, #3ade2a);
    background: linear-gradient(to bottom right, #729dc3, #3ade2a);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2rem;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      flex: 2;
      width: 100%;
    }
    div.buttons {
      width: 250px;
      display: flex;
      justify-content: space-between;
      button {
        padding: 1rem;
        font-size: 1.6rem;
        border: none;
        border-radius: 8px;
        color: #fff;
        background-color: #262729;
      }
    }
  }
</style>
