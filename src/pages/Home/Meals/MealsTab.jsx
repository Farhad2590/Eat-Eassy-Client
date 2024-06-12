/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { useEffect, useState } from 'react'

import MealsCategory from './MealsCategory'
import SharedTitle from '../../../Components/Shared/Sharedtitle/SharedTitle'
const TabCategories = () => {
    const [meals, setMeals] = useState([])
    console.log(meals);
    useEffect(() => {
        fetch('/meal.json')  // Adjust the path if necessary
            .then(response => response.json())
            .then(data => {
                setMeals(data);
                console.log(data);
            })
    }, []);

    return (
        <Tabs className='bg-white p-5'>
            <div className=''>
               <SharedTitle heading="Food We Are Offering" subHeading="Best Meal Suggesion In town"></SharedTitle>
                <div className="border border-dashed my-3"></div>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Breakfast</Tab>
                        <Tab>Lunch</Tab>
                        <Tab>Dinner</Tab>
                       
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {meals
                        .slice(0,3)
                            .map(room => (
                                <MealsCategory key={room._id} room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {meals
                            .filter(r => r.category === 'Breakfast')
                            .map(room => (
                                <MealsCategory key={room._id} room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {meals
                            .filter(r => r.category === 'Lunch')
                            .map(room => (
                                <MealsCategory key={room._id} room={room} />
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {meals
                            .filter(r => r.category === 'Dinner')
                            .map(room => (
                                <MealsCategory key={room._id} room={room} />
                            ))}
                    </div>
                </TabPanel>

            </div>
        </Tabs>
    )
}

export default TabCategories