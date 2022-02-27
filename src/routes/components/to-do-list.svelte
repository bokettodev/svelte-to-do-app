<script lang="ts">
	import type { IToDoItem } from '../interfaces/to-do-item.interface';
	import ToDoItem from './to-do-item.svelte';

	export let notDoneItems: IToDoItem[] = [];
	export let doneItems: IToDoItem[] = [];

	function toggle(item: IToDoItem): void {
		remove(item);
		if (item.done) {
			notDoneItems = [{ ...item, done: !item.done }, ...notDoneItems];
		} else {
			doneItems = [{ ...item, done: !item.done }, ...doneItems];
		}
	}

	function remove(item: IToDoItem): void {
		if (item.done) {
			doneItems = doneItems.filter((i) => i !== item);
		} else {
			notDoneItems = notDoneItems.filter((i) => i !== item);
		}
	}
</script>

<div class="list">
	{#each notDoneItems as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle(item)} on:remove={() => remove(item)} />
	{/each}

	{#each doneItems as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle(item)} on:remove={() => remove(item)} />
	{/each}
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		gap: var(--indent-default);
	}
</style>
