import { FaCheckCircle } from "react-icons/fa";
import SharedTitle from "../../../Components/Shared/Sharedtitle/SharedTitle";


const PlanCard = () => {
    return (
        <div className="p-5 ">
            <SharedTitle heading="Membership Plans" subHeading="Best Monthly Meal Plans For Everyone"></SharedTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Standard Plan */}
                <div className="flex flex-col w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-black dark:text-gray-400">Standard Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">9</span>
                        <span className="ms-1 text-xl font-normal text-black dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" className="space-y-2 my-4">
                        <li className="flex items-center">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">2 team members</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">20GB Cloud storage</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Integration help</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Sketch Files</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">API Access</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Complete documentation</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">24×7 phone & email support</span>
                        </li>
                    </ul>
                    <div className="mt-auto">
                        <button type="button" className="text-white bg-orange-500 hover:bg-none focus:orange-4 focus:outline-none focus:orange-orange-200 dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:orange-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center">
                            Choose Standard Plan
                        </button>
                    </div>
                </div>

                {/* Premium Plan */}
                <div className="flex flex-col w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-black dark:text-gray-400">Premium Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">79</span>
                        <span className="ms-1 text-xl font-normal text-black dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" className="space-y-2 my-4">
                        <li className="flex items-center">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">5 team members</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">50GB Cloud storage</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Priority support</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Exclusive offers</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Advanced analytics</span>
                        </li>
                    </ul>
                    <div className="mt-auto">
                        <button type="button" className="text-white bg-orange-500 hover:bg-none focus:orange-4 focus:outline-none focus:orange-blue-200 dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:orange-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center">
                            Choose Standard Plan
                        </button>
                    </div>
                </div>

                {/* Teachers Meal Plan */}
                <div className="flex flex-col w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-4 text-xl font-medium text-black dark:text-gray-400">Teachers Meal Plan</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">39</span>
                        <span className="ms-1 text-xl font-normal text-black dark:text-gray-400">/month</span>
                    </div>
                    <ul role="list" className="space-y-2 my-4">
                        <li className="flex items-center">

                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Dedicated teacher support</span>
                        </li>
                        <li className="flex">
                            <FaCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-500" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Access to teacher-specific meal plans</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Customizable meal plans</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <FaCheckCircle className="w-4 h-4 text-black dark:text-black" />
                            <span className="text-sm font-normal leading-tight text-black dark:text-gray-400 ms-2">Educational resources</span>
                        </li>
                    </ul>
                    <div className="mt-auto">
                        <button type="button" className="text-white bg-orange-500 hover:bg-none focus:orange-4 focus:outline-none focus:orange-blue-200 dark:bg-blue-600 dark:hover:bg-orange-500 dark:focus:orange-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center">
                            Choose Standard Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
