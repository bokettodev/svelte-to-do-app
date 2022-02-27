<script lang="ts">
	import InputText from './components/input-text.svelte';
	import ToDoList from './components/to-do-list.svelte';
	import type { IToDoItem } from './interfaces/to-do-item.interface';

	let uid = 0;
	let notDoneItems: IToDoItem[] = [
		{ id: uid++, text: `Click here!` },
		{ id: uid++, text: `Walk the dog` }
	];
	let doneItems: IToDoItem[] = [{ id: uid++, done: true, text: `Make a ToDo app using new technology` }];

	function addNewTask(text: string): void {
		notDoneItems = [{ id: uid++, text }, ...notDoneItems];
	}
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
	</style>

	<title>ToDoApp</title>
</svelte:head>

<div class="app-container">
	<h1>ToDoApp</h1>

	<InputText on:onEnter={(e) => addNewTask(e.detail)} />

	<div class="list-container">
		<ToDoList bind:notDoneItems bind:doneItems />
	</div>
</div>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		font-size: 16px;
		line-height: 18px;
		margin: 0;
		padding: 0;

		&:focus {
			outline: none;
		}
	}

	:global(html) {
		height: 100vh;
		width: 100vw;
	}

	:global(body) {
		--bg-light-color: #3b3745;
		--bg-dark-color: #24222e;
		--primary-color: white;
		--secondary-color: gray;
		--default-indent-px: 12px;

		background-color: var(--bg-light-color);
		height: 100%;
		width: 100%;
	}

	.app-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin: auto;
		width: min(700px, 90%);

		h1 {
			color: var(--primary-color);
			font-size: 32px;
			line-height: 32px;
			margin: 18px 0;
			text-align: center;
		}
	}

	.list-container {
		height: 100%;
		overflow: auto;
		width: 100%;

		// TODO: Remove hiding scrollbars after replacing default scrollbar.
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}

		&::before,
		&::after {
			content: '';
			display: block;
			height: var(--default-indent-px);
			position: sticky;
		}

		&::before {
			background: linear-gradient(var(--bg-light-color) 30%, transparent);
			top: 0;
		}

		&::after {
			background: linear-gradient(transparent, var(--bg-light-color));
			bottom: 0;
		}

		:global(.list) {
			margin: auto;
			min-height: 100%;
			width: 100%;
		}
	}
</style>
