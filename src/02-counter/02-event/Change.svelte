<script>
  let checked = false;
</script>



<main>
  <label>
    <input type="checkbox" on:change={(e) => checked = e.target.checked} />
    동의합니다
  </label>
  
  <p>{checked ? '동의함' : '동의 안함'}</p>
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
