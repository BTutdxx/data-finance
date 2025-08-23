import React from "react";
import Laptop from "../assets/Laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-zinc-950k py-16 px-4">
            <div className="max-w-[1024px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="/"  className="w-[450px] mx-auto my-3"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#38bdf8] py-2">DATA ANALYTICS DASHBOARD</p>
                        <h1 className="text-[#38bdf8] font-bold md:text-3xl sm:text-3xl text-2xl py-2 ">Manage Data Anytics Centrally</h1>
                        <p className="text-white">
                         In the realm of data and finance, data analytics has become a cornerstone for driving informed decision-making and fostering sustainable growth. By leveraging advanced analytical tools and techniques, financial institutions can uncover actionable insights from vast datasets, enabling them to optimize investment strategies, manage risks, and enhance customer experiences.
                         </p>
                         <button className="bg-[#38bdf8] rounded-full w-[170px] h-[50px] my-6 mx-auto md:mx-0 px-6">Get Started</button>
                </div>
            </div>
           
        </div>
    )
}

export default Analytics;