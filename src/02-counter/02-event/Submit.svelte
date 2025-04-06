<script>
  let name = "";
  function handleSubmit() {
    alert(`${name}님, 제출 완료!`);
  }
</script>



<main>
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={name} placeholder="이름 입력" />
    <button type="submit">제출</button>
  </form>
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
