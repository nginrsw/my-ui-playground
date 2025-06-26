<script>
  let count = 0;

  function increase() {
    count++;
  }

  function decrease() {
    if (count > 0) count--;
  }
</script>

<style>
  body {
    padding: 25px;
  }

  .btn-style {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.2;
    border: none;
    background: #f0f0f0;
    min-width: 36px;
    min-height: 36px;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
  }

  .btn-style:hover {
    background: #e0e0e0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }

  .btn-style:active {
    background: #cccccc;
    transform: scale(0.96);
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  }

  .btn-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .btn-inner > * {
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
  }

  .vite-icon {
    width: 15px;
    height: 15px;
    display: inline-block;
    vertical-align: middle;
  }

  .minus,
  .plus {
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #838282;
    margin: 0 4px;
    user-select: none;
  }

  #output {
    margin: 0 8px;
    font-weight: bold;
  }
</style>

<!-- UI -->
<span class="minus" aria-hidden="true">-</span>

<button class="btn-style" on:click={decrease}>
  <span class="btn-inner">
    <img class="vite-icon" src="https://vitejs.dev/logo.svg" alt="vite logo" />
  </span>
</button>

<span id="output">{count}</span>

<button class="btn-style" on:click={increase}>
  <span class="btn-inner">
    <img class="vite-icon" src="https://vitejs.dev/logo.svg" alt="vite logo" />
  </span>
</button>

<span class="plus" aria-hidden="true">+</span>
