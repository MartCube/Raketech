<script setup lang="ts">
import type { Movie } from "~~/src/types"
defineProps<{ data: Movie }>()
</script>


<template>
	<div class="movie">
		<img :src="data.Poster">
		<div class="info">
			<h4>{{ data.Title }}</h4>
			<p>{{ data.Year }}</p>
			<p>{{ data.Type }}</p>
		</div>
	</div>
</template>

<style lang="scss">
.movie {
	display: flex;
	align-items: center;

	margin-bottom: 2rem;

	img {
		width: 5.5rem;
		margin-right: 2rem;
	}
}
</style>
