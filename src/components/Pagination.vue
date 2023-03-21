<script setup lang="ts">
defineProps<{
	totalPages: number,
	activePage: number,
}>()

defineEmits<{
	(e: 'updatePage', page: number): void
}>()
</script>


<template>
	<div class="pagination">
		<button v-for="item in totalPages" @click="$emit('updatePage', item)" :class="['page', { active: activePage == item }]">
			{{ item }}
		</button>
	</div>
</template>

<style lang="scss">
.pagination {
	width: 100%;
	display: flex;
	justify-content: center;

	.page {
		width: 1.5rem;
		height: 1.5rem;
		margin: 1.5rem;
		background: white;

		&.active {
			border-color: red;

		}
	}
}
</style>
