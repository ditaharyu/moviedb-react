import React from "react"
import { SearchMovie } from "../types/index"
import { useSearch } from "../controller"

const MovieList = React.lazy(() => import('./base/List'))

const Search = () => {
  const { data } = useSearch(title)

  return (
    <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-5">
       {
         data?.results.map((movie: SearchMovie, id: number) => {
           return (
             <MovieList key={id} title={movie.title} poster_path={movie.poster_path} />
           ) 
         })
       }
     </div>
  )
}
export default Search;
