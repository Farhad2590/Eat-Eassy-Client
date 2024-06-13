
import { FaStar } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";


const MealsCategory = ({ meal }) => {
    const { _id, image, title, price, description, rating } = meal;
    return (
        <div className="w-96 h-[30rem] border rounded-lg shadow-md flex flex-col">
            <div className="h-60 overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-black text-xl font-medium">{title}</span>

                    </div>
                    <p className="text-black text-sm font-normal opacity-75">
                        {description}
                    </p>
                </div>
                <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-black font-bold">Price: {price}</span>
                        <LuCircleDollarSign />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-black font-bold">Rating:{rating}</span>
                        <FaStar className="text-yellow-500" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <button
                    className="w-full h-12 py-2 text-white bg-orange-500 rounded-lg shadow-none hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-300 font-bold"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default MealsCategory;
