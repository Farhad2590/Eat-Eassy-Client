import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaUsers } from "react-icons/fa";
import toast from 'react-hot-toast'
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";



const ManageUser = () => {
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosPublic.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is an Admin Now!`)
                }
            })
    }
    return (
        <div>
            <SharedTitle heading="All Users"></SharedTitle>
            {/* <form onSubmit={handleSearch}>
                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-orange-400 focus-within:ring-orange-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                        name='search'
                        placeholder='Enter Food Title'
                        aria-label='Enter Food Title'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                        Search
                    </button>
                </div>
            </form> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button

                                        className="btn btn-ghost btn-lg">

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

export default ManageUser;