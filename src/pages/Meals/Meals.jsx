import { IoSearch } from "react-icons/io5";
import MealsCategory from "../../Components/Shared/Shared/MealsCategory";
import useMeals from "../../hooks/useMeals";

const Meals = () => {
    const [meals] = useMeals();
    return (
        <div className="mx-auto w-[90%]">
            <div className="relative flex items-center justify-center my-5">
                <div className="absolute inset-y-0 left-52 flex items-center pl-3 pointer-events-none">
                    <IoSearch className="text-2xl" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-8/12 p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Meals..."
                    required
                />
                <button
                    type="submit"
                    className="btn absolute right-60 bottom-2 bg-orange-400  text-white hover:border border-orange-400"
                >
                    Search
                </button>
            </div>
            <div className=' mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {meals
                    .map(meal => (
                        <MealsCategory key={meal._id} meal={meal} />
                    ))}
            </div>
        </div>
    );
};

export default Meals;