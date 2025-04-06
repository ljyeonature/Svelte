<script>
  function handleKeydown(event) {
    if (event.key === 'Enter') {
      alert("엔터 입력됨!");
    }
  }
</script>



<main>
  <input on:keydown={handleKeydown} placeholder="엔터 눌러보세요" />
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
