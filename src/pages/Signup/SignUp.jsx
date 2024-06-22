import { Link, useNavigate } from 'react-router-dom'

// import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import { useForm } from "react-hook-form"
import SocialLogin from '../../Components/Shared/SocialLogin/SocialLogin'


const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const {
    createUser,
    updateUserProfile,
  } = useAuth()


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL
            }
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  toast.success('User created successfully')
                  navigate('/');
                }
              })


          })
          .catch(error => console.log(error))
      })
  };


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Eateassy</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
            {errors.name && <span className="text-orange-500">Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
            {errors.photoURL && <span className="text-orange-500">Photo URL is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
            {errors.email && <span className="text-orange-500">Email is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"  {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} placeholder="password" className="input input-bordered" />
            {errors.password?.type === 'required' && <p className="text-orange-500">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-orange-500">Password must be 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className="text-orange-500">Password must be less than 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className="text-orange-500">Password must have one Uppercase one lower case, one number and one special character.</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary bg-orange-500 text-white" type="submit" value="Sign Up" />
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-orange-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
