import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/Error/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Signup/SignUp'
// import Meals from '../pages/Meals/Meals'
import MealDetails from '../pages/MealDetails/MealDetails'
import Meal from '../pages/Meals/Meal'
import Dashboard from '../Layouts/Dashboard';
import ManageUser from '../pages/Dashboards/ManageUser/ManageUser'
import Addmeals from '../pages/Dashboards/Addmeals/Addmeals'
import Managemeals from '../pages/Dashboards/ManageMeals/Managemeals'
import AllReviews from '../pages/Dashboards/AllReviews/AllReviews'
import Profile from '../pages/Dashboards/Profile/Profile'
import UpcommingMeals from '../pages/Dashboards/UpcommingMeals/UpcommingMeals'
import Upcomming from '../pages/Upcomming/Upcomming'
import UpdateMeal from '../pages/Dashboards/ManageMeals/UpdateMeal'
import MyReviews from '../pages/Dashboards/MyReviews/MyReviews'
import MealRequest from '../pages/Dashboards/MealRequest/MealRequest'
import Payment from '../pages/Dashboards/Payment/Payment'
import PaymentHistory from '../pages/Dashboards/PaymentHistory/PaymentHistory'
// import MealDetail from '../pages/MealDetails/MealDetail'
// import RoomDetails from '../pages/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/upcommingMeals',
        element: <Upcomming />,
      },
      {
        path: '/allMeals',
        element: <Meal />,
      },
      {
        path: '/meal/:id',
        loader: () => fetch('http://localhost:8000/meals'),
        element: <MealDetails />,
      },
      // {
      //   path: '/upcomming/:id',
      //   loader: () => fetch('http://localhost:8000/upcomming'),
      //   element: <MealDetail />,
      // },
      
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'allUsers',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'addMeals',
        element: <Addmeals></Addmeals>
      },
      {
        path:'allMeals',
        element:<Managemeals></Managemeals>
      },
      {
        path:'allReviews',
        element:<AllReviews></AllReviews>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      },
      {
        path:'upcomingMeals',
        element:<UpcommingMeals></UpcommingMeals>
      },
      {
        path: 'updatemeal/:id',
        element: <UpdateMeal></UpdateMeal>,
      },
      {
        path:'myReviews',
        element:<MyReviews></MyReviews>
      },
      {
        path:'requestedMeals',
        element:<MealRequest></MealRequest>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
