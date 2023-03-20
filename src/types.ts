export enum MovieType {
	'movie',
	'series',
	'episode'
}

export interface Movie {
	imdbID: string,
	Title: string,
	Year: string
	Type: string,
	Poster: string,
}

export interface OMDbAPI {
	Search: Movie[],
	Error: string,
	Response: boolean,
}