import tmdbInstance from "@/constants/axios";
import { endPoints } from "../constants/api-endpoints";
const fetchMovieList = async () => {
  const response = await tmdbInstance.get(endPoints.movieList);
  return response.data.genres;
};

const fetchMoviesByGenre = async (genreId) => {
  const response = await tmdbInstance.get(endPoints.moviesByGenre, {
    params: {
      with_genres: genreId,
    },
  });
  return response.data.results;
};

const fetchOnPlayingMovies = async () => {
  const response = await tmdbInstance.get(endPoints.onPlayingMovies);
  return response.data.results;
};

const fetchPopularMovies = async () => {
  const response = await tmdbInstance.get(endPoints.popularMovies);
  return response.data.results;
};

const fetchNewReleasesMovies = async () => {
  const response = await tmdbInstance.get(endPoints.newReleases);
  return response.data.results;
};

const fetchTopRatedMovies = async () => {
  const response = await tmdbInstance.get(endPoints.topRated);
  return response.data.results;
};

const fetchTrendingMoviesOnDate = async (time_window) => {
  const response = await tmdbInstance.get(endPoints.trending, {
    params: {
      time_window: time_window,
    },
  });
  return response.data.results;
};

const fetchLatestMovies = async () => {
  const response = await tmdbInstance.get(endPoints.latestMovies);
  return response.data.results;
};

const MovieServices = { fetchMovieList, fetchMoviesByGenre,fetchLatestMovies,fetchTrendingMoviesOnDate,fetchTopRatedMovies,fetchPopularMovies,fetchOnPlayingMovies, fetchNewReleasesMovies };

export default MovieServices;
