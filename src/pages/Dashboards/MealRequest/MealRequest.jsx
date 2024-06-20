import { useQuery } from "@tanstack/react-query";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MealRequest = () => {
    const axiosSecure = useAxiosPublic()
    const {
        data: requested = [],
    } = useQuery({
        queryKey: ['requested',],
        queryFn: async () => {
            const { data } = await axiosSecure(`/requested_meals`);
            return data;
        },
    });
    console.log(requested);
    const totalPrice = requested.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice);
    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/requested_meals/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    // refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            {/* <p>sss{totalPrice}</p> */}
            <SharedTitle heading="My Requested Meals" subHeading="Requester Meals For Me"></SharedTitle>

            <div className="flex justify-between mb-5">
                <div>
                    <h1 className="text-2xl font-bold bg-orange-500 rounded-lg text-white p-5">Requested Items :{requested.length}</h1>
                </div>
                <div>
                    <h1 className="text-2xl font-bold bg-orange-500 rounded-lg text-white p-5">Total Price :{totalPrice}</h1>
                </div>
                {
                    requested.length ?
                        <Link to="/dashboard/payment">
                            <button className=" bg-orange-500 text-white text-2xl p-5">Pay Now</button>
                        </Link> :
                        <button disabled className=" bg-orange-500 text-white text-2xl p-5">Pay Now</button>
                }
            </div> 
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
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requested.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {item.title}
                                </td>

                                <td className="text-right">{item.likes}</td>
                                <td className="text-right">{item.status}</td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaEdit className="text-orange-600"></FaEdit>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
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

export default MealRequest;