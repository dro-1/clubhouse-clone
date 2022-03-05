<script>
  let peerName = "Dro";
  let isContextOpen = false;
</script>

<div class="peer">
  <div on:click={() => (isContextOpen = !isContextOpen)} class="content">
    <img
      src="https://i2-prod.football.london/incoming/article21081402.ece/ALTERNATES/s1200c/0_CR7.jpg"
      alt="peer"
    />
    <p>{peerName}</p>
  </div>
  <div class="context" class:open={isContextOpen}>
    <button>Unmute</button>
    <button>Make Speaker</button>
    <button>Make Listener</button>
  </div>
</div>

<style lang="scss">
  div.peer {
    position: relative;
    div.content {
      position: relative;
      z-index: 2;
      overflow: hidden;
      img {
        border-radius: 50%;
        display: block;
        margin-bottom: 0.5rem;
        width: 100px;
        height: 100px;
      }
      p {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
      }
    }

    div.context {
      z-index: 1;
      background-color: #ddd;
      display: flex;
      flex-direction: column;
      width: 100px;
      border-radius: 10px;
      position: absolute;
      opacity: 0;
      //   top: 130px;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.5s ease-in-out;
      &.open {
        opacity: 1;
        top: 130px;
      }
      button {
        width: 100%;
        border: none;
        padding: 0.5rem;
        &:first-child {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        &:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
</style>
