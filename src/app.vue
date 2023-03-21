<script setup lang="ts">
import type { OMDbAPI } from "~~/src/types"

// query params
const apiEndpoint = 'http://www.omdbapi.com/?apikey=17effb'
const movieTitle = ref<string>('')
const movieYear = ref<string>('')
const MovieType = ref<string>('')
const activePage = ref(1)

// fetch data
const { data, pending } = await useFetch<OMDbAPI>(apiEndpoint, {
	query: { s: movieTitle, y: movieYear, type: MovieType, page: activePage },
})

const totalPages = computed(() => Math.ceil(Number(data.value?.totalResults) / 10))


function Search(params: { title: string, year: string, type: string }) {
	movieTitle.value = params.title
	movieYear.value = params.year
	MovieType.value = params.type
}
function updatePage(value: number) {
	activePage.value = value
}
</script>


<template>
	<div id="app">
		<h1>Raketech Test Task</h1>
		<h3>Search movies from OMDbAPI</h3>

		<SearchInput @params="Search" />

		<template v-if="data?.Search && !pending">
			<MovieCard v-for="movie in data.Search" :key="movie.imdbID" :data="movie" />
			<Pagination :totalPages="totalPages" :activePage="activePage" @updatePage="updatePage" />
		</template>

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