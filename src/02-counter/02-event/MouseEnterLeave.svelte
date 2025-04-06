<script>
  let hovering = false;
</script>

<main>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    on:mouseenter={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
    style="width:200px;height:100px;border:1px solid black"
  >
    {hovering ? "마우스 올라감" : "마우스를 올려보세요"}
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
