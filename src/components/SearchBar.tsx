import { FunctionComponent, useState } from 'react';
import { useSearch } from '../controller';
import { MenuBarProps } from '../types';

const MenuBar: FunctionComponent<MenuBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  // const { data: searchResult, isError, isLoading } = useSearch(query);
  const { data: searchResult } = useSearch(query);

  const handleSearch = async () => {
    try {
      if (searchResult && Array.isArray(searchResult.results)) {
        onSearch(searchResult.results);
      } else {
        // Handle empty or undefined search results
        onSearch([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <main className="flex justify-between">
      <div className="sm:text-[30px] text-[20px]">TheMovie<span className="text-orange-500">DB</span></div>
      <div className="flex sm:w-1/4 w-1/2 rounded-full border-[1px] bg-white text-center">
        <input
          type="text"
          id="search"
          placeholder="Search Movie"
          className="w-full px-4 py-0 text-gray-900 bg-transparent border-none outline-none focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="rounded-full bg-orange-400 hover:bg-orange-500 sm:px-4 px-2 m-[2px] text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </main>
  );
};
export default MenuBar;
