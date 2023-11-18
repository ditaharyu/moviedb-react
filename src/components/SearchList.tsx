import React from 'react';
import { SearchProps, SearchMovie } from '../types/index';
import MovieList from './base/List';

const SearchList: React.FC<SearchProps> = ({ movies }) => {
  if (movies == null) return null;
  
  if (movies?.length == 0) {
    return (
      <div className="text-center">
        <span>Cannot find movie(s)</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-5">
      {movies?.map((movie: SearchMovie, id: number) => (
        <MovieList key={id} title={movie.title} poster_path={movie.poster_path} id={movie.id} />
      ))}
    </div>
  );
};

export default SearchList;
