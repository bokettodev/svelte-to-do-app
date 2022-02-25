<script lang="ts">
	import type { IToDoItem } from '../interfaces/to-do-item.interface';

	export let item: IToDoItem | null = null;
</script>

<div class="item" class:item--done={item.done}>{item?.text.trim() || 'No title'}</div>

<style lang="scss">
	.item {
		background-color: #24222e;
		border-radius: 12px;
		color: #fff;
		cursor: pointer;
		font-weight: bold;
		overflow: hidden;
		padding: 16px;
		text-overflow: ellipsis;
		user-select: none;
		width: 100%;
		white-space: nowrap;

		&--done {
			color: gray;
			text-decoration: line-through;
		}
	}
</style>
