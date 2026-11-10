import { Link } from "react-router-dom"
import footerimage from "../assets/Images/footerimage.svg"
import indiaimage from "../assets/Images/inidaflag.png"

const Footer = () => {
  return (
    <footer className=" mt-20" >
    <div className=" w-full bg-white  ">
      <div className="flex justify-center gap-10 items-center  ">

      <div className="flex gap-10   text-[15px] text-gray-500">
        <div className="border-r border-gray-200 pr-12">
          <h2 className="mb-1 text-l font-semibold capitalize text-[#1CC29F]">
            sharebill
          </h2>
          <ul className="flex flex-col ">
            <li><Link to="#" className="hover:text-gray-900 hover:underline">About</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Press</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Blog</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Jobs</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Calculators</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">API</Link></li>
          </ul>
        </div>

        <div className="border-r border-gray-200 pr-12">
          <h2 className="mb-1 text-l font-semibold text-orange-500">
            Account
          </h2>
          <ul className="flex flex-col ">
            <li><Link to="/login" className="hover:text-gray-900 hover:underline">Log in</Link></li>
            <li><Link to="/signup" className="hover:text-gray-900 hover:underline">Sign up</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Reset password</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Settings</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Sharebill Pro</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Sharebill Pay</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Sharebill Card</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-1 text-l font-semibold text-black">
            More
          </h2>
          <ul className="flex flex-col ">
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Contact us</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">FAQ</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Site status</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-gray-900 hover:underline">Coastal Community Bank Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className=" text-black "><img src={indiaimage} alt="" className="h-20" />  <p>Made with :) in Providence, RI, India</p></div>
      </div>
    </div>
    <div>
      <img src={footerimage} alt="" /></div>
      </footer>
  )
}

export default Footer