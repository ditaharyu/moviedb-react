import React from "react"
import { PopularMovie } from "../types/index"
import { usePopular } from "../controller"

const MovieList = React.lazy(() => import('./base/List'))

const PopularList = () => {
  const { data } = usePopular()

  return (
    <div className="grid grid-cols-2 gap-2 pt-4 sm:gap-4 sm:grid-cols-5">
      {
        data?.results.map((movie: PopularMovie, id: number) => {
          return (
            <MovieList key={id} title={movie.title} poster_path={movie.poster_path} />
          ) 
        })
      }
    </div>
  )
}
export default PopularList;
