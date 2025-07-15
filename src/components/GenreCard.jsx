import React from 'react';
import { ArrowRight } from 'lucide-react'; // You can use any icon lib
import { imageUrl } from '../constants/api';

function GenreCard({ genreName, movies = [] }) {
  return (
    <div className="bg-[#1A1A1A] rounded-xl px-4 w-[200px] py-4 flex flex-col justify-between">
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        {movies.slice(0, 4).map((movie, index) => (
          <img
            key={index}
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-[6px] object-cover w-full"
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 px-1">
        <p className="text-white text-sm font-semibold">{genreName}</p>
        <ArrowRight className="text-white w-4 h-4" />
      </div>
    </div>
  );
}

export default GenreCard;
