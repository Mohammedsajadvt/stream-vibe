import tmdbInstance from "@/constants/axios";
import { endPoints } from "../constants/api-endpoints";

const fetchAiringToday = async () => {
  const response = await tmdbInstance.get(endPoints.airingToday);
  return response.data.results;
};

const fetchOnTheAir = async () => {
  const response = await tmdbInstance.get(endPoints.onTheAir);
  return response.data.results;
};

const fetchPopular = async () => {
  const response = await tmdbInstance.get(endPoints.popular);
  return response.data.results;
};

const fetchTopRated = async () => {
  const response = await tmdbInstance.get(endPoints.topRated);
  return response.data.results;
};

const fetchLatestShows = async () => {
  const response = await tmdbInstance.get(endPoints.latestShows);
  return response.data.results;
};

const fetchTrendingShows = async (time_window) => {
  const response = await tmdbInstance.get(endPoints.trendingShows, {
    params: {
      time_window: time_window,
    },
  });
  return response.data.results;
};

 const ShowServices = {
  fetchAiringToday,
  fetchOnTheAir,
  fetchPopular,
  fetchTopRated,
  fetchLatestShows,
  fetchTrendingShows
};

export default ShowServices;
