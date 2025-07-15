import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, fetchMoviesByGenre } from '../redux/movie.slice';
import { AppPagination } from '../components/AppPagination';
import GenreCard from './GenreCard';
function Categories() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const genresPerPage = 6;
    const { moviesList, moviesByGenre, loading, error } = useSelector((state) => state.movies);
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
        <div>
            <div className='flex pt-20 md:pl-20 md:pr-20 pr-2 pl-2 justify-between gap-45'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-white text-2xl font-bold'>Explore our wide variety of categories</h1>

                    </div>
                    <p className='text-[#999999]   pt-3 text-[13px] font-light'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className='m-auto hidden sm:flex justify-center pt-4'>
                    <AppPagination totalPages={Math.ceil(moviesList.length / genresPerPage)} currentPage={currentPage} onPageChange={(page) => setCurrentPage(page)} />
                </div>
            </div>
            <div className='flex  overflow-x-auto scrollbar-hide md:pl-20 md:pr-20 pr-2 pl-2 gap-4 pt-10'>
                {moviesList.slice((currentPage - 1) * genresPerPage, currentPage * genresPerPage).map((genre) => (
                    <GenreCard key={genre.id} genreName={genre.name} movies={moviesByGenre[genre.id] || []} />
                ))}
            </div>
            <div className="m-auto flex w-60 sm:hidden justify-center pt-4">
                <AppPagination
                    totalPages={Math.ceil(moviesList.length / genresPerPage)}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>

    )
}

export default Categories



//  {(moviesByGenre[genre.id] || []).slice(0, 4).map((movie) => (
//         <div key={movie.id} className="bg-gray-800 p-2 rounded-md">
//           <img
//             src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//             alt={movie.title}
//             className="rounded-md w-full h-auto"
//           />
//         </div>
//       ))}