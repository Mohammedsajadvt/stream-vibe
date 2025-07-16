import React from 'react';
import { ArrowRight } from 'lucide-react'; 
import { imageUrl } from '../constants/api';
import { Skeleton } from '../components/ui/skeleton';
function GenreCard({ genreName, movies = [] ,loading}) {
  return (
    <div className="bg-[#1A1A1A] cursor-pointer  transition-transform  hover:-translate-y-1 ease-in-out delay-150 duration-300  rounded-xl px-4 min-w-[170px] flex-shrink-0 w-[170px] border border-[#262626] py-4 flex flex-col justify-between">
      <div className="grid grid-cols-2  gap-1">
        {
        loading? Array.from({length:4}).map((_,index)=>(
          <div key={index} className="">
          <Skeleton className="h-25  w-full bg-[#262626]" />
        </div>
        ))
        :movies.slice(0, 4).map((movie, index) => (
          <img
            key={index}
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-[6px] object-cover w-full"
          />
        ))}
      </div>

      <div className="flex items-center justify-between  pt-2 px-1">
        <p className="text-white text-sm font-semibold">{genreName}</p>
        <ArrowRight className="text-white w-4 h-4" />
      </div>
    </div>
  );
}

export default GenreCard;
