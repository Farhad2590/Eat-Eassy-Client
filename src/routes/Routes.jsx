import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/Error/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/Signup/SignUp'
import Meals from '../pages/Meals/Meals'
import MealDetails from '../pages/MealDetails/MealDetails'
import Meal from '../pages/Meals/Meal'
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
        path: '/allMeals',
        element: <Meal />,
      },
      {
        path: '/meal/:id',
        loader: () => fetch('http://localhost:8000/meals'),
        element: <MealDetails />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
