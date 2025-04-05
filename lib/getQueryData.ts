'use server'; 

import MovieType from '@/lib/MovieType';

export default async function getQueryData(query : number):Promise<MovieType>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.TMDB_API_KEY}&language=en-US`); 
    const data = await res.json(); 
    return data; 
}; 
