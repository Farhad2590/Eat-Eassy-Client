import { FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdUpcoming } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";





import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addMeals">
                                    <IoMdAddCircle></IoMdAddCircle>
                                    Add Meal</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allMeals">
                                    <FaList></FaList>
                                    All Meals</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allReviews">
                                    <MdReviews></MdReviews>
                                    All Reviews</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/serveMeals">
                                    <PiHandCoinsFill></PiHandCoinsFill>
                                    Serve Meals</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/upcomingMeals">
                                    <MdUpcoming></MdUpcoming>
                                    Upcoming Meals</NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile">
                                        <CgProfile></CgProfile>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Requested Meals</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myReviews">
                                        <MdReviews></MdReviews>
                                        My Reviews
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <MdOutlinePayment></MdOutlinePayment>
                                        Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/allMeals">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;