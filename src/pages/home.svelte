<script>
</script>

<main>
  <form>
    <header>Join Room</header>
    <label>
      Username
      <input type="text" placeholder="Username" />
    </label>
    <label>
      Role
      <select name="role">
        <option value="speaker">Speaker</option>
        <option value="listener">Listener</option>
        <option value="moderator">Moderator</option>
      </select>
    </label>
    <button> Join </button>
  </form>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    width: 100%;
    background: #b24592;
    background: -webkit-linear-gradient(to right, #f15f79, #b24592);
    background: linear-gradient(to right, #f15f79, #b24592);
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      header {
        color: white;
        font-size: 4rem;
        margin-bottom: 4rem;
        text-align: center;
      }
      label {
        color: white;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      input,
      select {
        display: block;
        font-size: 2rem;
        padding: 1rem;
        margin-top: 0.5rem;
        border: none;
        border-radius: 1rem;
        width: 100%;
      }
      button {
        padding: 1rem;
        color: #eee;
        background-color: rgb(40, 40, 122);
        font-size: 2rem;
        border-radius: 1rem;
        width: 100%;
        border: none;
        margin-top: 2rem;
      }
    }
  }
</style>
