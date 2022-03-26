<script lang="ts">
	import { onMount } from 'svelte';
	import InputText from '../components/input-text.svelte';
	import ToDoList from '../components/to-do-list.svelte';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';

	let uid: number;
	let items: IToDoItem[];
	const listKey = 'toDoList';

	onMount((): void => {
		try {
			items = JSON.parse(localStorage.getItem(listKey)) || [];
		} catch {
			items = [];
			updateLocalStorage();
		}
		uid = items.length;
	});

	const addNewTask = (text: string): void => {
		text = text.trim();
		if (!text) {
			return;
		}
		items = [{ id: uid++, done: false, text }, ...items];
		updateLocalStorage();
	};

	const updateLocalStorage = (): void => {
		localStorage.setItem(listKey, JSON.stringify(items));
	};
</script>

<article>
	<h1>ToDoApp</h1>

	<InputText on:onEnter={(e) => addNewTask(e.detail)} />

	<div class="list-container">
		<ToDoList bind:items on:onToggle={updateLocalStorage} on:onRemove={updateLocalStorage} />
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
			user-select: none;
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
