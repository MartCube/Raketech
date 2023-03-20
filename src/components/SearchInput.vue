<script setup lang="ts">
defineEmits<{ (e: 'title', color: string): void }>() // emit selected color
const title = ref<string>('')
</script>

<template>
	<div class="search_input">
		<input type="text" class="titleInput" v-model="title">
		<button @click="$emit('title', title)">Search</button>
	</div>
</template>

<style lang="scss">
.search_input {
	margin: 2rem 0;
}
</style>
