<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';

	const dispatch = createEventDispatcher();
	export let item: IToDoItem | null = null;

	const toggle = (): void => {
		dispatch('toggle');
	};

	const remove = (event: Event): void => {
		event.stopPropagation();
		dispatch('remove');
	};
</script>

{#if item}
	<div class="item" class:item--done={item.done} in:fade on:click={toggle}>
		<p>{item.text.trim() || 'No title'}</p>

		<button on:click={remove}>&#x2715</button>
	</div>
{/if}

<style lang="scss">
	.item {
		align-items: center;
		background-color: var(--bg-secondary-color);
		border-radius: 0.75em;
		color: var(--text-primary-color);
		cursor: pointer;
		display: flex;
		padding: 1em;
		user-select: none;
		width: 100%;

		&--done {
			color: var(--text-secondary-color);

			p {
				text-decoration: line-through;
			}
		}

		p {
			font-weight: bold;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		button {
			background: none;
			border: none;
			color: inherit;
			cursor: pointer;
			flex-shrink: 0;
			font-weight: bold;
			height: 1.25em;
			margin-left: auto;
			width: 1.25em;
		}
	}
</style>
