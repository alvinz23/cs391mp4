'use server'; 
import MovieType from '../lib/MovieType'
export default async function getMovieData(query : string){
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json(); 

        const seen = new Set(); 
        const results : MovieType[] = [];

        for (let i = 0; i <data.results.length; i++){
            const movie = data.results[i]; 
            if (!seen.has(movie.title)){
                seen.add(movie.title);
                results.push(movie); 
            }
            if (seen.size == 10){
                break;
            }
        }
        return results;
    } catch (error) {
        console.log(error) 
        return []; 
    }
}