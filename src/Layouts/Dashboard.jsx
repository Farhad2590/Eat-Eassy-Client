import { FaCalendar, FaHome, FaList, FaUsers } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdUpcoming } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import logo from "../assets/Logo.png"





import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Spinner from "../Components/Shared/Spinner/Spinner";
// import useRole from "../hooks/useRole";



const Dashboard = () => {
    const { user } = useAuth()
    // const[role]= useRole()
    
    const [isAdmin,isAdminLoading] = useAdmin();

    if (isAdminLoading) {
        return <Spinner />;
    }
    console.log(isAdmin);

    return (

        <div className="flex">
            <aside className="flex flex-col w-64 min-h-screen bg-orange-400 px-2 py-4">
                <Link to="/" className="mx-auto bg-white">
                    <img
                        className='w-64'
                        src={logo}
                        alt='logo'
                    />
                </Link>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user && user.photoURL} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user && user.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user && user.email}</p>
                </div>

                <div>
                    <ul className="flex flex-col gap-5 justify-between flex-1 mt-6">
                        {
                            isAdmin ?
                                <>
                                    <li className="">
                                        <NavLink to="/dashboard/profile" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <FaHome></FaHome>
                                            Admin Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allUsers" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <FaUsers></FaUsers>
                                            All Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <IoMdAddCircle></IoMdAddCircle>
                                            Add Meal</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <FaList></FaList>
                                            All Meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allReviews" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <MdReviews></MdReviews>
                                            All Reviews</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/serveMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <PiHandCoinsFill></PiHandCoinsFill>
                                            Serve Meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/upcomingMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <MdUpcoming></MdUpcoming>
                                            Add Upcoming Meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allupcomingMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <IoMdAddCircle></IoMdAddCircle>
                                            All Upcoming Meals</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/profile" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <CgProfile></CgProfile>
                                            My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/requestedMeals" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <FaCalendar></FaCalendar>
                                            Requested Meals</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myReviews" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <MdReviews></MdReviews>
                                            My Reviews
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentHistory" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                            <MdOutlinePayment></MdOutlinePayment>
                                            Payment History</NavLink>
                                    </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/" className="flex items-center justify-center gap-2 p-2 text-black bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;