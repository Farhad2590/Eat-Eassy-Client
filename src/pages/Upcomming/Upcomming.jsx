import Upcomming_Meals from "../../Components/Shared/Shared/Upcomming_Meals";
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
                    <Upcomming_Meals key={meal._id} meal={meal} />
                ))}
        </div>
    );
};

export default Upcomming;