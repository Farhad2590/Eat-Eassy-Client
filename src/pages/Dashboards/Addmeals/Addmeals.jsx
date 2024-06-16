import { useForm } from "react-hook-form";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";

const Addmeals = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
    };
    return (
        <div>
            <SharedTitle heading="Add Meals" subHeading="Add Meals For Your  Users"></SharedTitle>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Meal Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Meal Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="salad">Breakfast</option>
                            <option value="pizza">Lunch</option>
                            <option value="soup">Dinner</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">upload image*</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                </div>

                <div className="flex gap-6">
                    {/* price */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    {/* Ingrediants */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Ingrediants*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrediants"
                            {...register('ingrediants', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>

                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Meal Description</span>
                    </label>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Meal Description"></textarea>
                </div>

                <div className="w-full">
                    <button className="btn w-full bg-orange-500 text-white font-bold mt-5">
                        Add Meal
                    </button>
                </div>



            </form>
        </div>
    );
};

export default Addmeals;