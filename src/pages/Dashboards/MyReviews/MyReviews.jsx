import React, { useState } from "react";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useMeals from "../../../hooks/useMeals";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyReviews = () => {
    const [menu] = useMeals();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews", user.email],
        queryFn: async () => {
            const { data } = await axiosPublic(`/reviews/${user.email}`);
            return data;
        },
    });

    const handleDeleteItem = (item) => {
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
                const res = await axiosPublic.delete(`/reviews/${item._id}?email=${user.email}`);
                if (res.data.deletedCount > 0) {
                    toast.success(`${item.food_title} has been deleted`);
                    refetch();
                } else {
                    toast.error("You are not authorized to delete this review.");
                }
            }
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentReviews = reviews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    return (
        <div>
            <SharedTitle heading="My Reviews" subHeading="Reviews From Our Daily Users"></SharedTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Likes</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentReviews.map((item, index) => {
                            const meal = menu.find(meal => meal.title === item.food_title);
                            const likes = meal ? meal.likes : 0;
                            const ids = meal ? meal._id : 0;

                            return (
                                <tr key={item._id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{item.food_title}</td>
                                    <td className="text-right">{likes}</td>
                                    <td className="text-right">{item.review}</td>
                                    <td>
                                        <button className="btn btn-ghost btn-lg">
                                            <FaEdit className="text-orange-600"></FaEdit>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-orange-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={`/meal/${ids}`}>
                                            <button className="btn bg-orange-500 text-white">
                                                View Meal
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button
                        className="btn bg-gray-500 text-white mr-2"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="btn bg-gray-300 text-black mr-2">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="btn bg-gray-500 text-white"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;
