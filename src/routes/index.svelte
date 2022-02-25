<script lang="ts">
	import ToDoList from './components/to-do-list.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
	</style>

	<title>ToDoApp</title>
</svelte:head>

<div class="list-container">
	<ToDoList />
</div>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
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
		background-color: #3b3745;
		height: 100%;
		width: 100%;
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

		:global(.list) {
			margin: 12px auto;
			min-height: 100%;
			width: min(700px, 90%);
		}
	}
</style>
