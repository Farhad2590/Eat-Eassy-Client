import MealsCategory from "../../Components/Shared/Shared/MealsCategory";
import SharedTitle from "../../Components/Shared/Sharedtitle/SharedTitle";
import useUpcommingMeals from "../../hooks/useUpcommingMeals";



const Upcomming = () => {
    const[upcommingMeals] = useUpcommingMeals()
    console.log(upcommingMeals);
    return (
        <div>
            <SharedTitle heading="Upcomming Meals" subHeading="Meals We Are Adding"></SharedTitle>
            {
                upcommingMeals.map(meal => (
                    <MealsCategory key={meal._id} meal={meal} />
                ))}
        </div>
    );
};

export default Upcomming;