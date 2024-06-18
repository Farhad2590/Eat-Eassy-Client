import { useEffect, useState } from "react";
import MealsCategory from "../../Components/Shared/Shared/MealsCategory";
import axios from "axios";


const Meal = () => {
    const [meals, setMeal] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:8000/all-meals?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`)
            setMeal(data)

        }
        getData()
    }, [currentPage, filter, itemsPerPage, sort,search])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:8000/meals-count?filter=${filter}&search=${search}`)
            setCount(data.count)

        }
        getData()
    }, [filter,search])

    //  handle pagination button
    const handlePaginationButton = value => {
        console.log(value)
        setCurrentPage(value)
    }

    const handleSearch = e => {
        e.preventDefault()
    
        setSearch(searchText)
      }


    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')
    }

    console.log(count);

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
    return (
        <div>
            <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
                <div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                        <div>
                            <select
                                onChange={e => {
                                    setFilter(e.target.value)
                                    setCurrentPage(1)
                                }}
                                value={filter}
                                name='category'
                                id='category'
                                className='border p-4 rounded-lg'
                            >
                                <option value=''>Filter By Category</option>
                                <option value='Breakfast'>Breakfast</option>
                                <option value='Lunch'>Lunch</option>
                                <option value='Dinner'>Dinner</option>
                            </select>
                        </div>

                        <form onSubmit={handleSearch}>
                            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-orange-400 focus-within:ring-orange-300'>
                                <input
                                    className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                    type='text'
                                    onChange={e => setSearchText(e.target.value)}
                                    value={searchText}
                                    name='search'
                                    placeholder='Enter Food Title'
                                    aria-label='Enter Food Title'
                                />

                                <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                                    Search
                                </button>
                            </div>
                        </form>
                        <div>
                            <select
                                onChange={e => {
                                    setSort(e.target.value)
                                    setCurrentPage(1)
                                }}
                                value={sort}
                                name='sort'
                                id='sort'
                                className='border p-4 rounded-md'
                            >
                                <option value=''>Filter By Price</option>
                                <option value='dsc'>Descending Order</option>
                                <option value='asc'>Ascending Order</option>
                            </select>
                        </div>
                        <button onClick={handleReset} className='btn'>Reset</button>
                    </div>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {meals
                            .map(meal => (
                                <MealsCategory key={meal._id} meal={meal} />
                            ))}
                    </div>
                </div>

                <div className='flex justify-center mt-12'>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}
                        className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-orange-500  hover:text-white'>
                        <div className='flex items-center -mx-1'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M7 16l-4-4m0 0l4-4m-4 4h18'
                                />
                            </svg>

                            <span className='mx-1'>previous</span>
                        </div>
                    </button>

                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlePaginationButton(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentPage === btnNum ? 'bg-orange-500 text-white' : ''
                                } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-orange-500  hover:text-white`}
                        >
                            {btnNum}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === numberOfPages}
                        onClick={() => handlePaginationButton(currentPage + 1)}
                        className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                        <div className='flex items-center -mx-1'>
                            <span className='mx-1'>Next</span>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Meal;