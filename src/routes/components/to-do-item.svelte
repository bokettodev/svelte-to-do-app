<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';

	export let item: IToDoItem | null = null;

	const dispatch = createEventDispatcher();

	function toggle(): void {
		dispatch('toggle');
	}

	function remove(event: Event): void {
		event.stopPropagation();
		dispatch('remove');
	}
</script>

<div class="item" class:item--done={item?.done} on:click={toggle}>
	<p>{item?.text.trim() || 'No title'}</p>

	<button on:click={remove}>&#x2715</button>
</div>

<style lang="scss">
	.item {
		align-items: center;
		background-color: var(--color-bg-dark);
		border-radius: 12px;
		color: var(--color-primary);
		cursor: pointer;
		display: flex;
		overflow: hidden;
		padding: 16px;
		user-select: none;
		width: 100%;

		&--done {
			color: var(--color-secondary);

			p {
				text-decoration: line-through;
			}
		}

		p {
			font-weight: bold;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		button {
			background: none;
			border: none;
			color: inherit;
			cursor: pointer;
			font-weight: bold;
			height: 20px;
			margin-left: auto;
			width: 20px;
		}
	}
</style>
