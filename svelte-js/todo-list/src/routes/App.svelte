<script>
	let todos = [];
	let newTodo = '';

	function addTodo() {
		if (newTodo.trim() !== '') {
			todos = [...todos, { text: newTodo, done: false }];
			newTodo = '';
		}
	}

	function toggleTodo(index) {
		todos = todos.map((todo, i) =>
			i === index ? { ...todo, done: !todo.done } : todo
		);
	}

	function removeTodo(index) {
		todos = todos.filter((_, i) => i !== index);
	}
</script>

<h1>= Todo List</h1>

<input
	placeholder="Tambah todo..."
	bind:value={newTodo}
	on:keydown={(e) => e.key === 'Enter' && addTodo()}
/>
<button on:click={addTodo}>Tambah</button>

<ul>
	{#each todos as todo, i}
		<li>
			<input type="checkbox" checked={todo.done} on:change={() => toggleTodo(i)} />
			<span style="text-decoration: {todo.done ? 'line-through' : 'none'}">
				{todo.text}
			</span>
			<button on:click={() => removeTodo(i)}>L</button>
		</li>
	{/each}
</ul>
