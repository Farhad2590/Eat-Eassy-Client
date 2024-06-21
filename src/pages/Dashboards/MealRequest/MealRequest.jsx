import { useQuery } from "@tanstack/react-query";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const MealRequest = () => {
    const axiosSecure = useAxiosPublic()
    const {
        data: requested = [],refetch,
    } = useQuery({
        queryKey: ['requested',],
        queryFn: async () => {
            const { data } = await axiosSecure(`/requested_meals`);
            return data;
        },
    });
    
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
                    refetch();
                    toast.success(`${item.food_title} has been deleted`);
                }
            }
        });
    }
    return (
        <div>
           
            <SharedTitle heading="My Requested Meals" subHeading="Requester Meals For Me"></SharedTitle>

            
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
                            
                            <th>Cancel</th>
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
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-orange-600"></FaTrashAlt>
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