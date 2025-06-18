<script>
  import { writable } from 'svelte/store';

  const todos = writable([]);
  let newTodo = '';
  let deferredPrompt;

  const addTodo = () => {
    if (newTodo.trim()) {
      todos.update((items) => [...items, newTodo.trim()]);
      newTodo = '';
    }
  };

  const removeTodo = (index) => {
    todos.update((items) => items.filter((_, i) => i !== index));
  };

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    }
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
  });
</script>

<main>
  <h1>Todo List</h1>

  <div>
    <input type="text" bind:value={newTodo} placeholder="Add a new todo" />
    <button on:click={addTodo}>Add</button>
  </div>

  <button on:click={installApp} style="margin-top: 20px;">Install App</button>

  <ul>
    {#each $todos as todo, index}
      <li>
        {todo} <button on:click={() => removeTodo(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
