<script>
  import { onMount } from "svelte";

  let username = "";
  let message = "";
  let messages = [];

  function getTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function sendMessage() {
    if (!username.trim() || !message.trim()) return;

    messages = [
      ...messages,
      { user: username.trim(), text: message.trim(), time: getTime() },
    ];
    message = "";
  }

  function handleKeydown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  let chatBox;

  // 새 메시지가 생길 때 스크롤 아래로
  $: {
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
</script>

<main>
  <div class="chat-wrapper">
    <h2>💬 미니 채팅</h2>

    <label>닉네임</label>
    <input bind:value={username} placeholder="닉네임을 입력하세요" />

    <div bind:this={chatBox} class="chat-box">
      {#each messages as msg}
        <div class="message">
          <strong>{msg.user}</strong>: {msg.text}
          <div class="meta">{msg.time}</div>
        </div>
      {/each}
    </div>

    <textarea
      bind:value={message}
      on:keydown={handleKeydown}
      rows="2"
      placeholder="메시지를 입력하고 엔터를 누르세요 (Shift+Enter는 줄바꿈)"
    />
  </div>
</main>

<style>
  .chat-wrapper {
    max-width: 500px;
    margin: 2rem auto;
    font-family: sans-serif;
  }
  .chat-box {
    border: 1px solid #ccc;
    padding: 1rem;
    height: 250px;
    overflow-y: auto;
    background: #f9f9f9;
    margin-bottom: 0.5rem;
    border-radius: 8px;
  }
  .message {
    margin: 0.5rem 0;
  }
  .meta {
    color: #888;
    font-size: 0.8rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.3rem;
    box-sizing: border-box;
  }
</style>
