import { PopularMovie } from '../../types'

const Movie = ({title, poster_path}: PopularMovie) => {
  return (
    <div className="pb-2 border border-transparent rounded cursor-pointer hover:border-orange-300">
      <img src={'https://image.tmdb.org/t/p/w500' + poster_path} className="object-cover w-full max-h-[150px] rounded" />
      <div className="pl-2 text-center text-[12px] h-12 sm:text-base sm:pl-0">{ title }</div>
    </div>
  )
}
export default Movie;
