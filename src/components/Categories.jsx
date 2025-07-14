import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, fetchMoviesByGenre } from '../redux/movie.slice';
function Categories() {
    const dispatch = useDispatch();
    const { moviesList, moviesByGenre, loading, error } = useSelector((state) => state.movies);
    console.log(moviesList);
    useEffect(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    useEffect(() => {
        if (moviesList.length > 0) {
            moviesList.forEach((genre) => {
                dispatch(fetchMoviesByGenre(genre.id));
            });
        }
    }, [moviesList, dispatch]);
    return (
        <div className='flex pt-20'>
            <div className='flex flex-col'>
                <h1 className='text-white text-2xl font-bold'>Explore our wide variety of categories{moviesList.title}</h1>
                <p className='text-[#999999] text-sm sm:text-base pt-3   max-w-lg  font-light'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
        </div>
    )
}

export default Categories


//  {(moviesByGenre[genre.id] || []).map((movie) => (
//               <div key={movie.id} className="bg-gray-800 p-2 rounded-md">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                   alt={movie.title}
//                   className="rounded-md"
//                 />
//                 <p className="mt-2 text-sm">{movie.title}</p>
//               </div>
//             ))}


//  {(moviesByGenre[genre.id] || []).slice(0, 4).map((movie) => (
//         <div key={movie.id} className="bg-gray-800 p-2 rounded-md">
//           <img
//             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//             alt={movie.title}
//             className="rounded-md w-full h-auto"
//           />
//         </div>
//       ))}