<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';
	import ToDoItem from './to-do-item.svelte';

	export let items: IToDoItem[] = [];
	const dispatch = createEventDispatcher();

	const toggle = ({ item }: { item: IToDoItem }): void => {
		item.done = !item.done;
		remove({ item, skipEvent: true });
		items.unshift(item);

		dispatch('onToggle', item);
	};

	const remove = ({ item, skipEvent }: { item: IToDoItem; skipEvent?: boolean }): void => {
		items = items.filter((i) => i !== item);

		if (!skipEvent) {
			dispatch('onRemove', item);
		}
	};
</script>

<div class="list">
	{#each items.filter((item) => !item.done) as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle({ item })} on:remove={() => remove({ item })} />
	{/each}

	{#each items.filter((item) => item.done) as item (item.id)}
		<ToDoItem bind:item on:toggle={() => toggle({ item })} on:remove={() => remove({ item })} />
	{/each}
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}
</style>
