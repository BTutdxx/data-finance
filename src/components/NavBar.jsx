import React, { useState }from "react";
import {AiOutlineClose } from 'react-icons/ai'
import { TiThMenuOutline } from "react-icons/ti";


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className= "fixed top-0 left-0 w-full z-50  flex justify-between items-center h-24 mx-auto px-7 text-white bg-[#09090b]">
            <h1 className="w-full text-3xl font-bold text-[#38bdf8]">FinData.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul> 
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> :  < TiThMenuOutline size={20}/>}
        </div>
        <div className={nav ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 transtion duration-700 ease-in-out  bg-[#0d150d]': 'fixed left-[-100%]'}>
             <h1 className="w-full text-3xl font-bold m-4  text-[#a3eaa3]">FinData.</h1>
            <ul className="uppercase p-5">
                <li className="p-4 border-b border-b-gray-600">Home</li>
                <li className="p-4 border-b border-b-gray-600">Company</li>
                <li className="p-4 border-b border-b-gray-600">Resource</li>
                <li className="p-4 border-b border-b-gray-600">About</li>
                <li className="p-4 border-b border-b-gray-600">Contact</li>
            </ul>
        </div>
        </div>
        
    )
}

export default NavBar