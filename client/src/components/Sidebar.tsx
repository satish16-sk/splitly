import { Link, NavLink } from "react-router-dom"
import InviteModal from "./InviteModel"
import primarylogo from ".././assets/images/splitwiseprimery.svg"
import { FaFlag } from "react-icons/fa"
import { TfiMenuAlt } from "react-icons/tfi"
import { useState } from "react"


const Sidebar = () => {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const navLinks = ({ isActive }) =>
    `flex cursor-pointer items-center gap-1 px-1.5 py-0.5 hover:bg-[#EEEEEE] border-l-6 transition-colors  ${
      isActive
        ? "border-[#5BC5A7] text-[#5BC5A7] font-semibold "
        : "border-transparent text-[#999999] hover:text-gray-600"
    }`

  return (
    <div className="ml-52 flex min-h-screen w-42 flex-col gap-0.5 py-2 text-black">
      <NavLink to="/dashboard" className={navLinks}>
        <img src={primarylogo} alt="logo" className="h-4" />
        <span className="text-md tracking-tight">Dashboard</span>
      </NavLink>

      <NavLink
        to="/recentactivity"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-1 border-l-6 px-1.5 py-0.5 transition-colors hover:bg-[#EEEEEE]  ${
            isActive
              ? "border-[#5BC5A7] font-semibold text-[#5BC5A7]"
              : "border-transparent text-[#999999] hover:text-gray-600"
          }`
        }
      >
        <FaFlag className="h-3.5" />
        <span className="text-md tracking-tight">Recent activity</span>
      </NavLink>

      <NavLink
        to="/allexpenses"
        className={({ isActive }) =>
          `mt-2.5 flex cursor-pointer items-center gap-1 border-l-6 px-1.5 py-0.5 transition-colors hover:bg-[#EEEEEE] ${
            isActive
              ? "border-[#5BC5A7] font-semibold text-[#5BC5A7]"
              : "border-transparent text-[#999999] hover:text-gray-600"
          }`
        }
      >
        <TfiMenuAlt className="h-3.5" />
        <span className="font-sans text-sm tracking-tight">All expenses</span>
      </NavLink>

      <section className="px-1">
        <div className="flex items-center justify-between border border-b-gray-200 bg-gray-100 px-1 hover:bg-[#EEEEEE] hover:text-gray-600 ">
          <span className="text-[11px] text-[#CCCCCC] uppercase ">groups</span>
          <Link to="/group-new" className="flex items-center gap-0.5 text-[11px] text-[#CCCCCC] hover:text-[#5BC5A7]">
            <p className="text-base font-semibold leading-none">+</p> add
          </Link>
        </div>
        <NavLink to="/groups" className={navLinks}>
          <div className="mt-1 w-60 cursor-pointer px-2 py-1 text-center text-[11px] text-[#CCCCCC] hover:bg-[#EEEEEE]">
            Hiding accounts settled for more than 30 days. Show »
          </div>
        </NavLink>

       
      </section>

      <section className="px-1">
        <div className="flex items-center justify-between border border-b-gray-200 bg-gray-100 px-1  hover:bg-[#EEEEEE]">
          <span className="text-[11px] text-[#CCCCCC] uppercase">friends</span>
          <button onClick={()=> setIsInviteOpen(true)} className="flex items-center gap-0.5 text-[11px] text-[#CCCCCC] hover:text-[#5BC5A7]">
            <p className="text-base font-semibold leading-none">+</p> add
          </button>
          
          {isInviteOpen && (
        <InviteModal closeModal={() => setIsInviteOpen(false)} />
      )}

        </div>
          <NavLink to="/friends" className={navLinks}></NavLink>
        
      </section>

      <div className="mt-1 cursor-pointer px-2 py-1 text-center text-[11px] text-[#CCCCCC] hover:bg-[#EEEEEE]">
        Hiding accounts settled for more than 30 days. Show »
      </div>

      <section>
        <div className="mt-2 border border-[#39A385] bg-[#5BC5A7] px-1 py-0.5 text-sm font-semibold text-white text-shadow-2xs">
          Invite friends
        </div>
        <div className="border border-[#CCCCCC] px-1">
          <input
            type="text"
            placeholder="Enter an email address"
            className="mt-1.5 w-full rounded border border-gray-300 py-0.5 pl-2 text-[13px] text-gray-600 transition-shadow placeholder:text-gray-300 focus:border-blue-400 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)] focus:outline-none"
          />
          <button className="mt-1.5 mb-1.5 rounded border border-gray-300 border-b-gray-400 bg-[#E6E6E6] px-2 py-1 text-[11px] text-gray-800">
            Send invite
          </button>
        </div>
      </section>
    </div>
  )
}

export default Sidebar