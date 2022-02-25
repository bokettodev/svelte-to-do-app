<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip, type FlipParams } from 'svelte/animate';
	import type { IToDoItem } from '../interfaces/to-do-item.interface';
	import ToDoItem from './to-do-item.svelte';

	const durationMs = 300;
	const [send, receive] = crossfade({
		fallback(node) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: durationMs,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
	const animate = (node: Element, args: { from: DOMRect; to: DOMRect }, params: FlipParams) =>
		flipEnabled ? flip(node, args, params) : {};
	let flipEnabled: boolean;

	let uid = 0;

	let notDoneItems: IToDoItem[] = [
		{ id: uid++, text: `Some task #${uid}` },
		{ id: uid++, text: `Some task #${uid}` },
		{ id: uid++, text: `Some task #${uid}` },
		{ id: uid++, text: `Some task #${uid}` }
	];

	let doneItems: IToDoItem[] = [
		{ id: uid++, done: true, text: `Some task #${uid}` },
		{ id: uid++, done: true, text: `Some task #${uid}` },
		{ id: uid++, done: true, text: `Some task #${uid}` },
		{ id: uid++, done: true, text: `Some task #${uid}` }
	];

	function toggle(item: IToDoItem): void {
		if (item.done) {
			flipEnabled = !!notDoneItems.length;

			doneItems = doneItems.filter((i) => i !== item);
			notDoneItems = [{ ...item, done: !item.done }, ...notDoneItems];
		} else {
			const notLastInList = notDoneItems.indexOf(item) !== notDoneItems.length - 1;
			flipEnabled = notLastInList;

			notDoneItems = notDoneItems.filter((i) => i !== item);
			doneItems = [{ ...item, done: !item.done }, ...doneItems];
		}
	}
</script>

<div class="list">
	{#each notDoneItems.filter((i) => !i.done) as item (item.id)}
		<div
			class="list__item"
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:animate
			on:click={() => toggle(item)}
		>
			<ToDoItem bind:item />
		</div>
	{/each}

	{#each doneItems.filter((i) => i.done) as item (item.id)}
		<div
			class="list__item"
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:animate
			on:click={() => toggle(item)}
		>
			<ToDoItem bind:item />
		</div>
	{/each}
</div>

<style lang="scss">
	.list {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;

		&__item {
			width: 100%;
		}
	}
</style>
