import React from 'react';

const SearchBar = React.lazy(() => import('./base/Search'))

function MenuBar() {
  return (
    <main className="flex justify-between">
      <div className="sm:text-[30px] text-[20px]">TheMovie<span className="text-orange-500">DB</span></div>
      <SearchBar />
    </main>
  )
}
export default MenuBar;
