import React from 'react';
import { SearchProps, SearchMovie } from '../types/index';
import MovieList from './base/List';


const SearchList: React.FC<SearchProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-5">
      {
        movies?.map((movie: SearchMovie, id: number) => (
          <MovieList key={id} title={movie.title} poster_path={movie.poster_path} />
        ))
      }
    </div>
  );
};
export default SearchList;
