'use client';
import {useState}from 'react'; 
import { useEffect } from 'react'; 
import getMovieData from '../lib/getMovieData'; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/navigation'
import MovieType from '../lib/MovieType'; 


export default function SearchBar(){
    const [input, setInput] = useState({id : 0, title : ''}); 
    const [results, setResults] = useState<MovieType[]>([]); 
    const router = useRouter(); 

    function handleSubmit(){
      const title = input.title.trim();
      const query = Number(input.id)
      if (!title){
        router.push(`/MoviePage/error`)
      }
      if (input.id){
        router.push(`/MoviePage/${query}`); 
      }

      const bestMatch = results.find((movie) => 
        movie.title.toLowerCase() === title.toLowerCase()
      ) || results[0]; 

      if (bestMatch){
        router.push(`/MoviePage/${bestMatch.id}`)
      }else{
        router.push(`/MoviePage/error`)
      }
    }


    useEffect(() => {
        if (!input){
            setResults([]);
            return;
        }
        const fetchData = async () =>{
            try{
                const res = await getMovieData(input.title.trim());
                setResults(res); 
            }catch (e){
                console.log(e);
                setResults([]); 
            }
        }; fetchData(); 
    }, [input]); 
    return(
<>
<form
  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
  }}
>
<div className="flex justify-center mt-5 px-4">
  <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center ">
    <div className="w-full">
  <div className="flex justify-center mt-4">
    <div className="w-full max-w-xl">
      <div className = "text-white">Search for a movie
      </div>
      <Autocomplete
        freeSolo
        options={results}
        getOptionLabel={(option) => typeof option === 'string'? option : option.title}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        inputValue={input.title}
        onInputChange={(event, newValue) => setInput({id : input.id , title : newValue})}
        onChange ={(event, newInput) => {
          if (newInput && typeof newInput === 'object'){
            setInput({id : newInput.id, title: input.title});
          }
        }}

        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              backgroundColor: 'white',
              width: '100%',
              '& label':{
                color : 'gray',
              },
              '& label.Mui-focused':{
                color : '#14b8a6',
              },
            }}
          />
        )}
      />
    </div>
  </div>
  </div>
    <button
      className="text-s w-full sm:mt-10 sm:mr-8 sm:w-[5rem] h-[57px] bg-teal-400 text-black"
      type="submit"
      onClick = {handleSubmit}
    >Search
    </button>
  </div>
</div>
</form>
</>
    )
}
