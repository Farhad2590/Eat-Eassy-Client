import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query'
import useMeals from "../../../hooks/useMeals"

const MyReviews = () => {
    const[menu] = useMeals()

    const axiosSecure = useAxiosPublic()
    const { user } = useAuth()
    // console.log(user.email);
    //   Fetch users Data
    const {
        data: reviews = [],
    } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/reviews/${user.email}`);
            return data;
        },
    });

    console.log(reviews);
    return (
        <div>
            <SharedTitle heading="My Reviews" subHeading="Reviews From Our Daily Users"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Name</th>
                            <th>Likes</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {item.food_title}
                                </td>

                                <td className="text-right">26</td>
                                <td className="text-right">{item.review}</td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaEdit className="text-orange-600"></FaEdit>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-orange-600"></FaTrashAlt>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn bg-orange-500 text-white">
                                        View Meal
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReviews;