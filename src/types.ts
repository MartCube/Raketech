export interface Movie {
	imdbID: string,
	Title: string,
	Year: string
	Type: string,
	Poster: string,
}

export interface OMDbAPI {
	Search: Movie[],
	totalResults: string
	Response: boolean,
	Error: string,
}