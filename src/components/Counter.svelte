<script>
  let count = $state(0);
  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    count -= 1;
  };
</script>

<button onclick={increment}>
  count is {count}
</button>
<button onclick={decrement}>
  Decrease count
</button>

<style>
  button:nth-of-type(2) {
    background-color: pink;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
