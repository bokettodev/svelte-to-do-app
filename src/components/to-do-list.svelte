<script lang="ts">
	import type { IToDoItem } from '../interfaces/to-do-item.interface';
	import ToDoItem from './to-do-item.svelte';

	export let items: IToDoItem[] = [];

	function toggle(item: IToDoItem): void {
		item.done = !item.done;
		items = items;
	}

	function remove(item: IToDoItem): void {
		items = items.filter((i) => i !== item);
	}
</script>

<div class="list">
	{#each items.filter((item) => !item.done) as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle(item)} on:remove={() => remove(item)} />
	{/each}

	{#each items.filter((item) => item.done) as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle(item)} on:remove={() => remove(item)} />
	{/each}
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}
</style>
