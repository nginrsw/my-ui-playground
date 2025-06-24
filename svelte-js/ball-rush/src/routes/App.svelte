<script>
	let dinoY = 0;
	let isJumping = false;
	let gravity = -1.2;
	let velocity = 0;
	let obstacles = [];
	let gameOver = false;
	let distance = 0;
	let interval;

	const dinoSize = 24;

	const jump = () => {
		if (!isJumping && !gameOver) {
			velocity = 12;
			isJumping = true;
		}
	};

	const resetGame = () => {
		dinoY = 0;
		isJumping = false;
		velocity = 0;
		obstacles = [];
		gameOver = false;
		distance = 0;
		clearInterval(interval);
		startGame();
	};

	const startGame = () => {
		interval = setInterval(() => {
			velocity += gravity;
			dinoY += velocity;

			if (dinoY < 0) {
				dinoY = 0;
				isJumping = false;
				velocity = 0;
			}

			obstacles = obstacles
				.map(ob => ({ ...ob, x: ob.x - 5 }))
				.filter(ob => ob.x > -20);

			if (Math.random() < 0.02) {
				obstacles.push({
					x: 300,
					width: 10 + Math.random() * 5,
					height: 20 // lebih pendek
				});
			}

			for (const ob of obstacles) {
				const dinoLeft = 10;
				const dinoRight = 10 + dinoSize;
				const obLeft = ob.x;
				const obRight = ob.x + ob.width;
				const isHitX = obLeft < dinoRight && obRight > dinoLeft;
				const isHitY = dinoY <= ob.height;

				if (isHitX && isHitY) {
					gameOver = true;
					clearInterval(interval);
				}
			}

			if (!gameOver) distance++;
		}, 30);
	};

	startGame();

	window.addEventListener('keydown', (e) => {
		if (e.code === 'Space') {
			jump();
		}
	});
</script>

<style>
	.game {
		width: 100%;
		max-width: 600px;
		height: 200px;
		border: 2px solid black;
		margin: 20px auto;
		position: relative;
		background: #f0f0f0;
		overflow: hidden;
	}
	.dino {
		width: 24px;
		height: 24px;
		background: limegreen;
		border-radius: 50%;
		position: absolute;
		left: 10px;
	}
	.obstacle {
		background: red;
		position: absolute;
		bottom: 0;
	}
	.distance {
		text-align: center;
		font-size: 1.2em;
	}
	.game-over {
		text-align: center;
		color: red;
		font-weight: bold;
	}
</style>

<div class="distance">distance: {distance}</div>

<div class="game" on:click={jump}>
	<div class="dino" style="bottom: {dinoY}px;"></div>
	{#each obstacles as ob}
		<div
			class="obstacle"
			style="left: {ob.x}px; width: {ob.width}px; height: {ob.height}px;">
		</div>
	{/each}
</div>

{#if gameOver} 
	<div class="game-over">
		<p>= Game Over</p>
		<button on:click={resetGame}>Restart</button>
	</div>
{/if}
