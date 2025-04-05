export default interface MovieType{
    id:number;
    title:string;
    release_date:string;
    vote_average:number;
    poster_path : string;
    backdrop_path:string;
    overview: string;
    genres: { id: number; name: string }[];
}