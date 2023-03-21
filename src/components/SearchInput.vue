<script setup lang="ts">
defineEmits<{
	(e: 'params', params: { title: string, year: string, type: string }): void
}>()

const title = ref<string>('')
const year = ref<string>('')
const type = ref<string>('movie')
</script>

<template>
	<div class="search_input">
		<input type="text" v-model="title" placeholder="title">
		<input type="text" v-model="year" placeholder="year">
		<select v-model="type">
			<option value="movie">movie</option>
			<option value="series">series</option>
			<option value="episode">episode</option>
		</select>
		<button @click="$emit('params', { title, year, type })">Search</button>
	</div>
</template>

<style lang="scss">
.search_input {
	margin: 2rem 0;
}
</style>
