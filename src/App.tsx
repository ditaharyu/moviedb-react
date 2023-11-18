import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';
import { SearchMovie } from './types/index';
import PopularList from './components/PopularList';

function App() {
  const [searchResults, setSearchResults] = useState<SearchMovie[]>([]);

  const handleCallback = () => {
    if(searchResults)
      console.log('Search results updated.');
  };

  const handleSearch = (movies: SearchMovie[]) => {
    setSearchResults(movies);
    handleCallback();
  };
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="py-4">
        <SearchList movies={searchResults} />
      </div>
      <span className="text-xl font-bold">Popular</span>
      <PopularList />
    </>
  );
}

export default App;
