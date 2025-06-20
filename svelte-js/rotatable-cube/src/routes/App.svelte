<script>
  let rotationX = 0;
  let rotationY = 0;
  let startX, startY;

  function startDrag(x, y) {
    startX = x;
    startY = y;
  }

  function dragMove(x, y) {
    const deltaX = x - startX;
    const deltaY = y - startY;
    startX = x;
    startY = y;
    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;
  }

  function handleMouseDown(e) {
    startDrag(e.clientX, e.clientY);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(e) {
    dragMove(e.clientX, e.clientY);
  }

  function handleMouseUp() {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  function handleTouchStart(e) {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  }

  function handleTouchMove(e) {
    const touch = e.touches[0];
    dragMove(touch.clientX, touch.clientY);
  }
</script>

<style>
  .scene {
    width: 150px;
    height: 150px;
    perspective: 600px;
    margin: 40px auto;
    touch-action: none;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
  }

  .face {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #111;
    border: 1px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .face img {
    width: 40px;
  }

  .front  { transform: translateZ(75px); }
  .back   { transform: rotateY(180deg) translateZ(75px); }
  .right  { transform: rotateY(90deg) translateZ(75px); }
  .left   { transform: rotateY(-90deg) translateZ(75px); }
  .top    { transform: rotateX(90deg) translateZ(75px); }
  .bottom { transform: rotateX(-90deg) translateZ(75px); }
</style>

<div
  class="scene"
  on:mousedown={handleMouseDown}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
>
  <div
    class="cube"
    style="transform: rotateX({rotationX}deg) rotateY({rotationY}deg);"
  >
    <div class="face front"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
    <div class="face back"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
    <div class="face right"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
    <div class="face left"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
    <div class="face top"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
    <div class="face bottom"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /></div>
  </div>
</div>