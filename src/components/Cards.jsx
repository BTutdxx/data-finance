import React from "react";
import singleUser from "../assets/singleUser.png"
import multiuser from "../assets/multiuser.png"
import threeuser from "../assets/threeuser.png"

const Cards = () =>{
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
         <div className="max-w-[1240px] mx-auto grid  md:grid-cols-3 gap-8 ">
            <div className="w-full shadow-xl flex flex-col p-4 mx-4 rounded-lg
             hover:scale-105 duration-300 ">
              <img className="w-15 mx-auto mt-[-0rem] bg-white 
              " src={singleUser} alt="/" />
              <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
              <p className="text-center font-bold text-4xl">1,200 ETB</p>
              <div className="text-center font-medium">
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6 ">500 GB storage</p>
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6">I Granted User</p>
                <p className="py-2 shinadow-2xl rounded-md mx-8 mt-6">Send up t0 2 GB</p>
              </div>
               <button className="bg-[#38bdf8] rounded-full w-[170px] h-[50px] my-6 mx-auto  px-6 font-extrabold">Start trial</button>
            </div>
        
             <div className="w-full shadow-xl flex flex-col p-20 mx-4 rounded-lg
             hover:scale-105 duration-300 ">
              <img className="w-20 mx-auto mt-[-4rem] bg-white
              " src={multiuser} alt="/" />
              <h2 className="font-bold text-2xl text-center py-8">Partnership</h2>
              <p className="text-center font-bold text-4xl">2,000 ETB</p>
              <div className="text-center font-medium">
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6 ">500 GB storage</p>
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6">I Granted User</p>
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6">Send up to 10 GB</p>
              </div>
               <button className="bg-[#38bdf8] rounded-full w-[170px] h-[50px] my-6 mx-auto  px-6 font-extrabold">Start trial</button>
            </div>
  
            
             <div className="w-full shadow-xl flex flex-col p-20 mx-4 rounded-lg
             hover:scale-105 duration-300">
              <img className="w-20 mx-auto mt-[-4rem] bg-white
              " src={threeuser} alt="/" />
              <h2 className="font-bold text-2xl text-center py-8">Group Account</h2>
              <p className="text-center font-bold text-4xl">3,500 ETB</p>
              <div className="text-center font-medium">
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6 ">5 TB storage</p>
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6">10 User Allowed</p>
                <p className="py-2 shadow-2xl rounded-md mx-8 mt-6">Send up to 20 GB</p>
              </div>
               <button className="bg-[#38bdf8] rounded-full w-[170px] h-[50px] my-6 mx-auto  px-6 font-extrabold">Start trial</button>
            </div>
         </div>
        
        </div>
    )
}
export default Cards;