import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    return (
<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
    <div>
        <h1 className="w-full text-3xl font-bold text-[#38bdf8]">Finance</h1>
        <p> From predicting market trends to detecting fraudulent activities, 
            data analytics empowers finance professionals to make precise, 
            evidence-based decisions that align with organizational goals..</p>
       <div className="flex justify-between md:w-[75%] my-6">
        <a 
          href="https://www.facebook.com" target="blank" rel="noopener noreferrer">
             <FaFacebookSquare className="hover:scale-125 duration-300" size={30}/>
          </a>
          <a href="https://www.instagram.com" target="blank">
          <FaInstagram className="hover:scale-125 duration-300" size={30}/>
          </a>
        
         <a href="https://www.github.com" target="blank">
         <FaGithub className="hover:scale-125 duration-300"  size={30}/>
         </a>
        
        <a href="https://www.X.com" target="blank">
        <FaSquareXTwitter className="hover:scale-125 duration-300" size={30}/>
        </a>

        <a href="https://web.telegram.org" target="">
        <FaTelegramPlane className="hover:scale-125 duration-300" size={30}/>
        </a>
       </div>
    </div>
    <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="text-shadow-lg text-gray-500">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insight</li>
            </ul>
        </div>
          <div>
            <h6 className="text-shadow-lg text-gray-500">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
          <div>
            <h6 className="text-shadow-lg text-gray-500">Personal</h6>
            <ul>
                <li className="py-2 text-sm">Features</li>
                <li className="py-2 text-sm">Accounts</li>
                <li className="py-2 text-sm">Payments</li>
                <li className="py-2 text-sm">Insight</li>
            </ul>
        </div>
         <div>
            <h6 className="text-shadow-lg text-gray-500">Learn</h6>
            <ul>
                <li className="py-2 text-sm">Resources</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">FAQS</li>
                <li className="py-2 text-sm">Think</li>
            </ul>
        </div>
    </div>
    <div>  
</div>
</div>
    );
}

export default Footer;