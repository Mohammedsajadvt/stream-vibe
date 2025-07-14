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

const MovieServices = { fetchMovieList,fetchMoviesByGenre };

export default MovieServices;
