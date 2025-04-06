<script>
  let count = 0;
  $: doubled = count * 2;
  $: console.log(`Count is now ${count}`);
  $: halfed = count / 2;
  $: plused = count + 1;
  $: minused = count - 1;
</script>

<main>
  <button on:click={() => count--}>
    Count1: {count} (x2: {doubled})
    <br>
    Count2: {count} (/2: {halfed})
    <br>
    Count3: {count} (+2: {plused})
    <br>
    Count4: {count} (-2: {minused})
  </button>
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
