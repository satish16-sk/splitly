import roundimg from "../../assets/Images/imgcircle.png"
import AppHeader from "@/components/AppHeader"
import Sidebar from "@/components/Sidebar"
import applelogo from "../../assets/Images/apple-logo.svg"
import googleplay from "../../assets/Images/android-gpay.png"
const RecentActivity = () => {
  return (
    <>
      <AppHeader />
      <section className="flex gap-6">
        <Sidebar />
        <div className="w-140 border border-gray-300 shadow-[0_0_12px] shadow-black/20">
          <div className="border-b bg-[#EEEEEE] p-3.5 text-2xl font-semibold text-[#333333]">
            Recent activity
          </div>
          <div className="flex gap-3 border-b p-3">
            <div>
              <img className="w-10 rounded-full" src={roundimg} alt="" />
            </div>
            <div>
              <span className="font-semibold">You</span> created the group <span className="font-semibold">"group."</span>
              <p className="text-sm text-gray-400">Jun 1</p>
            </div>
          </div>
        </div>
         <div className="w-45">
        <h1 className="mt-3.5 text-[13px] font-semibold text-[#999999] uppercase">
          splitwise on the go
        </h1>
        <p className="text-[13px] tracking-tight text-[#333333]">Get the free Splitwise app and add IOUs from anywhere:</p>
        <div className="mt-2 flex flex-col gap-2">
          <img src={applelogo} alt="" />
          <img src={googleplay} alt="" />
        </div>
      </div>
      </section>
    </>
  )
}

export default RecentActivity
