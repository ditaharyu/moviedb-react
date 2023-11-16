const SearchBar = () => {
  return (
    <div className="flex sm:w-1/4 w-1/2 rounded-full border-[1px] bg-white text-center">
      <input
        type="text"
        id="search"
        placeholder="Search Movie"
        className="w-full px-4 py-0 text-gray-900 bg-transparent border-none outline-none focus:outline-none"
      />
      <button className="rounded-full bg-orange-400 hover:bg-orange-500 sm:px-4 px-2 m-[2px] text-white">
        S
      </button>
    </div>
  )
}
export default SearchBar;
