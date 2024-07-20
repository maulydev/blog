import { IoSearch } from "react-icons/io5"

const SearchForm = () => {
  return (
    <form className="flex">
        <input
          type="text"
          placeholder="Search for posts..."
          className="border dark:border-gray-700 dark:text-white px-4 py-2 flex-1 dark:bg-gray-700 outline-none rounded-l"
        />
        <button className="bg-gray-900 dark:bg-gray-950 text-white px-4 py-2 rounded-r hover:bg-gray-900">
          <IoSearch />
        </button>
      </form>
  )
}

export default SearchForm