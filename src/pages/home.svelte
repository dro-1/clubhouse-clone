<script>
  import { hmsActions } from "./../services/hms";
  import { getToken } from "./../utils/utils";
  let userName = "";
  let role = "";

  const submitForm = async () => {
    if (!userName || !role) return;
    try {
      const authToken = await getToken(role, userName);
      const config = {
        userName,
        authToken,
        settings: {
          isAudioMuted: true,
          isVideoMuted: false,
        },
        //metaData: JSON.stringify({city: 'Winterfell', knowledge: 'nothing'}),
        rememberDeviceSelection: true, // remember manual device change
      };

      // joins rooms
      hmsActions.join(config);
    } catch (error) {
      console.log("Token API Error", error);
    }
  };
</script>

<main>
  <form>
    <header>Join Room</header>
    <label for="username">
      Username
      <input
        bind:value={userName}
        id="username"
        type="text"
        placeholder="Username"
      />
    </label>
    <label>
      Role
      <select bind:value={role} name="role">
        <option value="speaker">Speaker</option>
        <option value="listener">Listener</option>
        <option value="moderator">Moderator</option>
      </select>
    </label>
    <button on:click|preventDefault={submitForm}> Join </button>
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
