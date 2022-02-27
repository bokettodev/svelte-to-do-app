<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let task: string;
	const dispatch = createEventDispatcher();

	function onKeyPress(event: KeyboardEvent): void {
		if (event.key !== 'Enter') {
			return;
		}
		dispatch('onEnter', task || '');
		task = '';
	}
</script>

<input type="text" placeholder="Enter your task..." bind:value={task} on:keyup={onKeyPress} />

<style lang="scss">
	input {
		background-color: var(--bg-dark-color);
		border: none;
		border-radius: 12px;
		color: var(--primary-color);
		font-weight: bold;
		overflow: hidden;
		padding: 16px;
		width: 100%;

		&::placeholder {
			color: var(--secondary-color);
		}
	}
</style>
