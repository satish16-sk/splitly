import AppHeader from "@/components/AppHeader"
import Sidebar from "@/components/Sidebar"
import { IoMenu } from "react-icons/io5"
import { IoCalendar } from "react-icons/io5"
import { FaChartBar } from "react-icons/fa"
import { useState } from "react"

const AllExpenses = () => {
  const [activity, setActivity] = useState("menu")

  return (
    <>
      <AppHeader />
      <section className="flex gap-6">
        <Sidebar />
        <div className="w-140 border border-gray-300 shadow-[0_0_12px] shadow-black/20">
          <div className="bg-[#EEEEEE]">
            <div className="flex items-center justify-between px-4 py-3">
              <h1 className="text-2xl font-semibold text-[#333333]">
                All expenses
              </h1>
              <div className="flex gap-2">
                <button className="cursor-pointer rounded border border-orange-600 border-b-[#bd3808] bg-[#FF652F] px-3 py-1.5 text-[15px] tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#FF5216] active:scale-95">
                  Add an expense
                </button>
                <button className="cursor-pointer rounded border border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#48BE9D] active:scale-95">
                  Settle up
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <h2 className="text-[26px] font-semibold text-[#333333]">
              You have not added any expenses yet
            </h2>
            <p className="mt-2 text-[17px] text-[#999999]">
              To add a new expense, click the orange “Add an expense” button.
            </p>
          </div>
        </div>

        <div className="w-45">
          <section className="mt-4 flex gap-1">
            <button
              onClick={() => setActivity("menu")}
              className={`cursor-pointer rounded border px-1 py-0.5 ${
                activity === "menu"
                  ? "border-gray-200 border-b-gray-400 bg-[#DDDDDD] text-black"
                  : "bg-gray-50 text-[#CCCCCC]"
              }`}
            >
              <IoMenu size={17} />
            </button>
            <button
              onClick={() => setActivity("calendar")}
              className={`cursor-pointer rounded border px-1 py-0.5 ${
                activity === "calendar"
                  ? "border-gray-200 border-b-gray-400 bg-[#DDDDDD] text-black"
                  : "bg-gray-50 text-[#CCCCCC]"
              }`}
            >
              <IoCalendar size={15} />
            </button>
            <button
              onClick={() => setActivity("chart")}
              className={`cursor-pointer rounded border px-1 py-0.5 ${
                activity === "chart"
                  ? "border-gray-200 border-b-gray-400 bg-[#DDDDDD] text-black"
                  : "bg-gray-50 text-[#CCCCCC]"
              }`}
            >
              <FaChartBar size={15} />
            </button>
          </section>
          <section className="mt-4">
            {activity === "menu" ? (
              <>
                <h1 className="text-sm font-semibold tracking-tight text-[#999999] uppercase">
                  Your total balance
                </h1>
                <p className="mt-2 text-[#999999]">You are all settled up</p>
              </>
            ) : activity === "calendar" ? (
              <>
                <h1 className="text-sm font-semibold tracking-tight text-[#999999] uppercase">
                  Upcoming expenses
                </h1>
                <p className="mt-0.5 text-[12px] leading-5">
                  You have not added any recurring expenses yet
                </p>
              </>
            ) : (
              <>
                <h1 className="text-sm font-semibold tracking-tight text-[#999999] uppercase">
                  Trends this month
                </h1>
                <div className="mt-2 flex flex-col">
                  <h1 className="text-sm font-semibold tracking-tight text-gray-800">
                    Total you paid for
                  </h1>
                  <span className="flex text-[13px] text-[#999999]">
                    <p>$</p>0.00
                  </span>
                </div>
                <div className="mt-1.5 flex flex-col">
                  <h1 className="text-sm font-semibold tracking-tight text-gray-800">
                    Your total share
                  </h1>
                  <span className="flex text-[13px] text-[#999999]">
                    <p>$</p>0.00
                  </span>
                </div>
                <div className="mt-1.5 flex flex-col">
                  <h1 className="text-sm font-semibold tracking-tight text-gray-800">
                    Payments made
                  </h1>
                  <span className="flex text-[13px] text-[#999999]">
                    <p>$</p>0.00
                  </span>
                </div>
                <div className="mt-1.5 flex flex-col">
                  <h1 className="text-sm font-semibold tracking-tight text-gray-800">
                    Payments received
                  </h1>
                  <span className="flex text-[13px] text-[#999999]">
                    <p>$</p>0.00
                  </span>
                </div>
                <div className="mt-1.5 flex flex-col">
                  <h1 className="text-sm font-semibold tracking-tight text-gray-800">
                    Total change in balance
                  </h1>
                  <span className="flex gap-0.5 text-[13px] text-[#999999]">
                    +<p>$</p>0.00
                  </span>
                </div>
                <div className="mt-3 flex flex-col">
                  <h1 className="cursor-pointer text-sm tracking-tight text-[#0088CC] hover:text-[#005580] hover:underline">
                    View full charts
                  </h1>
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    </>
  )
}

export default AllExpenses
