<script>
  import {
    selectPeerAudioByID,
    selectIsPeerAudioEnabled,
  } from "@100mslive/hms-video-store";
  import { onMount } from "svelte";
  import { hmsActions, hmsStore } from "../services/hms";
  export let peer = null;
  export let localPeerRole = "";

  let isContextOpen = false;
  let firstCharInName = "";
  let isPeerMuted = false;

  const togglePeerAudio = () => {
    hmsActions.setRemoteTrackEnabled(peer.audioTrack, isPeerMuted);
  };

  const changeRole = (role) => {
    hmsActions.changeRole(peer.id, role, true);
  };

  onMount(async () => {
    hmsStore.subscribe((peerAudio) => {}, selectPeerAudioByID(peer?.id));
  });

  onMount(async () => {
    hmsStore.subscribe((isPeerAudioEnabled) => {
      isPeerMuted = !isPeerAudioEnabled;
    }, selectIsPeerAudioEnabled(peer?.id));
  });

  $: firstCharInName = peer ? peer.name.split(" ")[0][0].toUpperCase() : "";
</script>

<div class="peer">
  <div on:click={() => (isContextOpen = !isContextOpen)} class="content">
    <div class="image">
      <p>{firstCharInName}</p>
    </div>
    <p>{peer ? peer.name : ""}{peer && peer.isLocal ? " (You)" : ""}</p>
  </div>
  {#if localPeerRole == "moderator" && !peer.isLocal}
    <div class="context" class:open={isContextOpen}>
      <button on:click={togglePeerAudio}
        >{isPeerMuted ? "Unmute" : "Mute"}</button
      >
      <button on:click={() => changeRole("speaker")}>Make Speaker</button>
      <button on:click={() => changeRole("listener")}>Make Listener</button>
    </div>
  {/if}
</div>

<style lang="scss">
  div.peer {
    position: relative;
    margin: 2rem;
    div.content {
      position: relative;
      z-index: 2;
      overflow: hidden;
      cursor: pointer;
      div.image {
        border-radius: 50%;
        display: block;
        margin-bottom: 0.5rem;
        width: 100px;
        height: 100px;
        background-color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 4rem;
        }
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
