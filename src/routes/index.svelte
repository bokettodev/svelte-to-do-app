<script lang="ts">
	import InputText from '../components/input-text.svelte';
	import ToDoList from '../components/to-do-list.svelte';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';

	let uid = 0;
	let items: IToDoItem[] = [
		{ id: uid++, text: `Click here!` },
		{ id: uid++, done: true, text: `Walk the dog` }
	];

	function addNewTask(text: string): void {
		text = text.trim();
		if (!text) {
			return;
		}
		items = [{ id: uid++, text }, ...items];
	}
</script>

<article>
	<h1>ToDoApp</h1>

	<InputText on:onEnter={(e) => addNewTask(e.detail)} />

	<div class="list-container">
		<ToDoList bind:items />
	</div>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: auto;
		width: min(700px, 90%);

		h1 {
			color: var(--text-primary-color);
			margin: 0.5em 0;
			text-align: center;
		}
	}

	.list-container {
		height: 100%;
		overflow: auto;
		width: 100%;

		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}

		&::before,
		&::after {
			content: '';
			display: block;
			height: 0.75em;
			position: sticky;
		}

		&::before {
			background: linear-gradient(var(--bg-primary-color) 30%, transparent);
			top: 0;
		}

		&::after {
			background: linear-gradient(transparent, var(--bg-primary-color));
			bottom: 0;
		}
	}
</style>
