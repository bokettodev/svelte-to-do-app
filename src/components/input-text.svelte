<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let value = '';

	function onKeyUp(event: KeyboardEvent): void {
		if (event.key !== 'Enter') {
			return;
		}
		dispatch('onEnter', value);
		value = '';
	}
</script>

<input type="text" placeholder="Enter your task..." bind:value on:keyup={onKeyUp} />

<style lang="scss">
	input {
		background-color: var(--bg-secondary-color);
		border: none;
		border-radius: 0.75em;
		color: var(--text-primary-color);
		font-weight: bold;
		overflow: hidden;
		padding: 1em;
		width: 100%;

		&::placeholder {
			color: var(--text-secondary-color);
		}
	}
</style>
