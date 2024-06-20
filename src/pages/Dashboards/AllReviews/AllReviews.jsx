
import useReview from "../../../hooks/useReview";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";
import useMeals from "../../../hooks/useMeals";
import { Link } from "react-router-dom";



const AllReviews = () => {
    const [review, , refetch] = useReview();
    const [menu] = useMeals()
    // const [menu] = useMeals();
    const axiosPublic = useAxiosPublic()
    const [reviewCounts, setReviewCounts] = useState({});

    useEffect(() => {
        // Function to calculate review counts by food_title
        const calculateReviewCounts = () => {
            const counts = {};
            review.forEach(item => {
                if (item.food_title in counts) {
                    counts[item.food_title]++;
                } else {
                    counts[item.food_title] = 1;
                }
            });
            setReviewCounts(counts);
        };

        calculateReviewCounts();
    }, [review]);
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
                const res = await axiosPublic.delete(`/reviews/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    toast.success(`${item.title} has been deleted`)
                    // refetch to update the ui
                    refetch();
                }


            }
        });
    }

    const handleViewMeal = (e) => {
        console.log(e);
        const mealDetails = menu.find(meals => meals.title === e.food_title);
        console.log(mealDetails);
    }

    console.log(menu);
    return (
        <div>
            <SharedTitle heading="All Reviews" subHeading="Reviews From Our Daily Users"></SharedTitle>
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
                            <th>Reviews count</th>
                            <th>Delete</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {review.map((item, index) => {
                            const meal = menu.find(meal => meal.title === item.food_title);
                            const likes = meal ? meal.likes : 0; // Default to 0 likes if meal is not found
                            const ids = meal ? meal._id : 0;
                            console.log(ids);
                            return (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.food_title}</td>
                                    <td className="text-right">{likes}</td>
                                    <td className="text-right">{reviewCounts[item.food_title]}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-orange-600" />
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={`/meal/${ids}`}>
                                            <button

                                                className="btn bg-orange-500 text-white">
                                                View Meal
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllReviews;