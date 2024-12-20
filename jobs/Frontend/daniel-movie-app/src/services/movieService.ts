import { Movie } from "../models/Movie";

export const fetchMovies = async (searchTerm: string, page:number = 1): Promise<any> => {
  let url = 'https://api.themoviedb.org/3/search/movie?query='+searchTerm+'&page='+page+'&api_key='+process.env.REACT_APP_TMDB_API_KEY;
  const response = await fetch(url, {method: 'GET', headers: {accept: 'application/json'}});

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};

export const fetchMovie = async (id: string | undefined): Promise<Movie> => {
  let url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+process.env.REACT_APP_TMDB_API_KEY;
  const response = await fetch(url, {method: 'GET', headers: {accept: 'application/json'}});

  if (!response.ok) {
    throw new Error("Failed to fetch movie details with id: " + id);
  }
  return response.json();
};