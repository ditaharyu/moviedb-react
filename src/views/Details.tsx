import { useParams } from 'react-router';
import { useDetail } from '../controller';
import { GenreMovie } from '../types';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const { data } = useDetail(movieId);
  
  return (
    <div className="space-y-2">
      <Link to={`/`}>
        <button className="px-4 py-2 bg-orange-400 rounded hover:bg-orange-500">Back</button>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <img src={'https://image.tmdb.org/t/p/w500' + data?.poster_path} alt={data?.title} />
        <div className='space-y-2'>
          <div className="text-[1.5rem] sm:text-[2.5rem] font-bold">{data?.title}</div>
          <div className="text-[12px] sm:text-xl text-orange-300 italic">{data?.tagline}</div>
          <div className="block space-x-0 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex">
            <div className="space-x-1">
              {data?.genres?.map((genre: GenreMovie) => (
                <span className="px-2 py-1 text-[12px] sm:text-sm text-black bg-yellow-200 rounded">{genre.name}</span>
              ))}
            </div>
            <div className="font-bold text-orange-300 text-[12px] sm:text-sm">{data?.runtime} minutes</div>
          </div>
          <div className="text-[14px] sm:text-base">"{data?.overview}"</div>
        </div>
      </div>
    </div>
  )
}
export default MovieDetail;
