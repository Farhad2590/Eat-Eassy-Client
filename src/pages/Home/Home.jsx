import Banner from "./Banner/Banner";
// import CategoryRooms from "./Tabs/CategoryRooms";
import MealsTab from "./Meals/MealsTab";
import PlanCard from "./PlanCard/PlanCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsTab></MealsTab>
            <PlanCard></PlanCard>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;