import logo from ".././assets/images/splitwiselogo.svg"
import { Link } from "react-router-dom"
import profile from "../assets/Images/satishimg.png"
import { FaSortDown } from "react-icons/fa"
import { useState } from "react"

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex  w-full items-center justify-between px-55 border bg-[#5BC5A7] py-0.5 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-white cursor-pointer">
          <Link to="/group">
          <img src={logo} alt="Sharebill Logo" className="h-5  " />
         </Link>
        </div>

        <div className="relative inline-block font-sans">
          <div 
            onClick={toggleDropdown}
            className="flex cursor-pointer items-center justify-end gap-1.5 px-4 transition-color  rounded-lg"
          >
            <div className="h-7 w-7 overflow-hidden rounded-full border-2 border-white/20 text-white">
              <img src={profile} alt="User Profile" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-1 text-sm text-white select-none">
              <span>satish</span>
              <FaSortDown className="-mt-1.5" />
            </div>
          </div>

          {isOpen && (
            <div className="absolute right-2 top-full z-20 mt-1 w-40 rounded border text-sm border-gray-500 bg-white shadow-lg">
              
              <ul className="relative flex flex-col rounded-md bg-white   text-gray-700  list-none">
                <li>
                  <Link to="/account" onClick={toggleDropdown} className="block cursor-pointer pl-2 py-1 hover:bg-[#5BC5A7] hover:text-white">
                    Your account
                  </Link>
                </li>
                <li>
                  <Link to="/create-group" onClick={toggleDropdown} className="block cursor-pointer pl-2 py-1 hover:bg-[#5BC5A7] hover:text-white">
                    Create a group
                  </Link>
                </li>
                <li>
                  <Link to="/fairness-calculators" onClick={toggleDropdown} className="block cursor-pointer pl-2  py-1 hover:bg-[#5BC5A7] hover:text-white">
                    Fairness calculators
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={toggleDropdown} className="block cursor-pointer pl-2 py-1 hover:bg-[#5BC5A7] hover:text-white">
                    Contact support
                  </Link>
                </li>
                <li>
                  <Link to="/logout" onClick={toggleDropdown} className="block cursor-pointer pl-2 py-1 hover:bg-[#5BC5A7] hover:text-white border-t border-gray-100 mt-1">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AppHeader