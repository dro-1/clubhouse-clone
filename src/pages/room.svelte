<script>
  import page from "page";
  import Peer from "./../components/peer.svelte";
  import { hmsActions, hmsStore } from "./../services/hms";
  import { selectPeers } from "@100mslive/hms-video-store";
  import { onMount, onDestroy } from "svelte";
  import { PeerStore } from "./../stores";
  import {
    selectLocalPeerRole,
    selectIsLocalAudioEnabled,
  } from "@100mslive/hms-video-store";

  let peers = [];
  let localPeerRole = "";
  let audioEnabled = null;

  const handlePeers = (iPeers) => {
    let res = hmsStore.getState(selectLocalPeerRole);
    localPeerRole = res ? res.name : "";
    audioEnabled = hmsStore.getState(selectIsLocalAudioEnabled);
    PeerStore.set(iPeers);
  };

  const handleMute = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
    audioEnabled = hmsStore.getState(selectIsLocalAudioEnabled);
  };

  onMount(async () => {
    hmsStore.subscribe(handlePeers, selectPeers);
  });

  const leaveRoom = () => hmsActions.leave();

  onDestroy(leaveRoom);

  $: peers = $PeerStore;
</script>

<main>
  <h1>Welcome To The Room</h1>

  <section class="peers">
    {#each peers as peer (peer.id)}
      <Peer {localPeerRole} {peer} />
    {/each}
  </section>
  <div class="buttons">
    {#if localPeerRole != "listener"}
      <button on:click={handleMute} class="mute"
        >{audioEnabled ? "Mute" : "Unmute"}</button
      >
    {/if}
    <button on:click={leaveRoom} class="leave">Leave Room</button>
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
