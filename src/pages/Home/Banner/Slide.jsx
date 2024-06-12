// import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/20'>
        <div className='text-center bg-black bg-opacity-40 p-5 rounded-2xl'>
          <h1 className='text-3xl font-semibold text-orange-400 lg:text-4xl'>
            {text}
          </h1>
          <br />
          <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearch />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Meals..."
                required
              />
              <button
                type="submit"
                className="btn absolute right-2.5 bottom-1 bg-orange-400  text-white hover:border border-orange-400"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Slide