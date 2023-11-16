import React from 'react';

const MenuBar = React.lazy(() => import('./components/MenuBar'))
const SearchList = React.lazy(() => import('./components/SearchList'))
const PopularList = React.lazy(() => import('./components/PopularList'))

function App() {
  return (
    <main className="min-h-screen p-4 text-white bg-gray-600">
      <MenuBar />
      <div className="pt-4">
        <span className="text-xl font-bold">Results</span>
        <SearchList />
      </div>
      <div>
        <span className="text-xl font-bold">Popular</span>
        <PopularList />
      </div>
    </main>
  )
}

export default App;
