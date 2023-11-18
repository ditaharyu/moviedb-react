import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import PopularList from './components/PopularList';
import { SearchMovie } from './types';
import MovieDetail from './views/Details';

function App() {
  const [searchResults, setSearchResults] = useState<SearchMovie[]>([]);

  const handleSearch = (movies: SearchMovie[]) => {
    setSearchResults(movies);
  };
  
  return (
    <main className="min-h-screen p-4 text-white bg-gray-600">
      <SearchBar onSearch={handleSearch} />
      <div className="py-4">
        <SearchList movies={searchResults} />
      </div>
      <div>
        <span className="text-xl font-bold">Popular</span>
        <PopularList />
      </div>
      <MovieDetail />
    </main>
  );
}

export default App;
