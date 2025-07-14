import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../redux/movie.slice';
 
 const store = configureStore(
    {
        reducer:{
        movies:movieReducer,
        }
    }
);

export default store;


