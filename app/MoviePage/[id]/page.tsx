'use client';

import {useParams} from 'next/navigation'; 
import getQueryData from '@/lib/getQueryData'; 
import MovieType from '@/lib/MovieType'; 
import {useState, useEffect} from 'react';


export default function MoviePage(){
    const param = useParams()
    const movieId = Number(param.id); 
    const [movie, setMovie] = useState<MovieType | null> (null);

    useEffect(()=>{
        if(!isNaN(movieId)){
            getQueryData(movieId).then((data) => setMovie(data));
        }
    }, [movieId]);

    if (!movie) return <p className="text-white text-center mt-10">Loading...</p>;


    return(
        <div className="flex justify-center mt-6 ">
        <div className="flex flex-col sm:flex-row sm:max-w-[60rem]  bg-slate-800">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt = {`Image for ${movie.title}`}
            className="h-auto max-w-90 text-white"
          />

          <div className="p-4 text-white w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{movie.title}</h2>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Year:</span> {movie.release_date}
            </p>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Rating:</span> {movie.vote_average}
            </p>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-semibold">Genre:</span> {movie.genres[0]?.name}
            </p>
            <p className="w-100 text-sm sm:text-base mt-4 text-gray-300">{movie.overview}</p>
            <img src = {`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt ={`image for ${movie.title}`} className = "mt-5 w-full sm:w-[40rem]" />
          </div>
        </div>
      </div>
    )
}; 

