<script lang="ts">
	import type { IToDoItem } from '../interfaces/to-do-item.interface';
	import ToDoItem from './to-do-item.svelte';

	const mockItems: IToDoItem[] = [
		{
			text: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
		},
		{ text: 'Some task', done: true },
		{ text: 'Some task' },
		{ text: 'Some task' },
		{ text: 'Some task' }
	];
</script>

<div class="list">
	{#each mockItems as item}
		<ToDoItem bind:item />
	{/each}
</div>

<style lang="scss">
	.list {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 12px;
		justify-content: center;
		width: 100%;
	}
</style>
