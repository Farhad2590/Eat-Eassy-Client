import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const MealsCategory = ({ room }) => {
    const { _id, image, title,price } = room;
    return (
        <div className="w-96 border rounded-lg shadow-md">
            <div className="h-96 overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-blue-gray-800 font-medium">{title}</span>
                    <span className="text-blue-gray-800 font-medium">{price}</span>
                </div>
                <p className="text-gray-600 text-sm font-normal opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </p>
            </div>
            <div className="pt-0 p-4">
                <button
                    className="w-full py-2 text-white bg-orange-500 rounded-lg shadow-none hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MealsCategory;
