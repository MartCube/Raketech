<script setup lang="ts">
import type { OMDbAPI } from "~~/src/types"

// query params
const apiEndpoint = 'http://www.omdbapi.com/?apikey=17effb'
const movieTitle = ref<string>('naruto')

// fetch data
const { data, pending } = await useFetch<OMDbAPI>(apiEndpoint, {
	query: { s: movieTitle },
})


function SearchByTitle(value: string) {
	movieTitle.value = value
}
</script>


<template>
	<div id="app">
		<h1>Raketech Test Task</h1>

		<SearchInput @title="SearchByTitle" />

		<template v-if="data?.Search && !pending">
			<MovieCard v-for="movie in data.Search" :key="movie.imdbID" :data="movie" />
		</template>

		<h3 v-if="data?.Error">{{ data.Error }}</h3>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
}

html,
body {
	background: black;
	color: white;
}

#app {
	display: flex;
	flex-direction: column;
}
</style>