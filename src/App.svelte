<script>
  import router from "page";
  import Home from "./pages/home.svelte";
  import Room from "./pages/room.svelte";
  import { onMount } from "svelte";
  import { hmsStore } from "./services/hms";
  import { selectIsConnectedToRoom } from "@100mslive/hms-video-store";

  let page;

  router("/", () => (page = Home));

  router("/room", () => (page = Room));

  router.start();

  const onRoomStateChange = (connected) => {
    if (connected) router.redirect("/room");
    else router.redirect("/");
  };

  onMount(async () => {
    hmsStore.subscribe(onRoomStateChange, selectIsConnectedToRoom);
  });
</script>

<svelte:component this={page} />
