import { useEffect, useState } from 'react';
import { useSearch } from '../controller';
import { MenuBarProps } from '../types';
import IconSearch from '../assets/image/magnifying-glass.svg';

const MenuBar: React.FC<MenuBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  // const searchResult = query ? useSearch(query).data : null;
  const { data: searchResult, refetch } = useSearch(query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (searchResult && Array.isArray(searchResult.results)) {
      onSearch(searchResult.results);
    }
    return () => {
      // onSearch([]);
    }
  }, [onSearch, searchResult])
  
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
          onChange={handleInputChange}
          onKeyUp={(e) => { if (e.key === 'Enter') refetch(); }}
        />
        <button onClick={() => refetch()}>
          <img src={IconSearch} alt="icon-search" className="w-6 mr-4" />
        </button>
      </div>
    </main>
  );
};

export default MenuBar;
