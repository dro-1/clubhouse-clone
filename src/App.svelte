<script>
  import router from "page";
  import Home from "./pages/home.svelte";
  import Room from "./pages/room.svelte";

  let page;

  router("/", () => (page = Home));

  router("/room", () => (page = Room));

  router.start();
</script>

<svelte:component this={page} />
