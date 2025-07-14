import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieServices from "./movie.service";

export const fetchMovieList = createAsyncThunk(
  "movies/moviesList",
  async (_, thunkApi) => {
    try {
      return await MovieServices.fetchMovieList();
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data || "Something went wrong Movie List"
      );
    }
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  "movies/MoviesByGenre",
  async (genreId, thunkAPI) => {
    try {
      const data = await MovieServices.fetchMoviesByGenre(genreId);
      return { genreId, data };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error loading movies"
      );
    }
  }
);

const initialState = {
  moviesList: [],
  moviesByGenre: {},
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.moviesList = action.payload;
      })
      .addCase(fetchMovieList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchMoviesByGenre.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { genreId, data } = action.payload;
        state.moviesByGenre[genreId] = data;
      })
      .addCase(fetchMoviesByGenre.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default moviesSlice.reducer;
