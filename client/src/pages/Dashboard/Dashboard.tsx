import { useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { apiFetch } from "@/api"
import AddExpenseModal from "@/components/AddExpense"
import AppHeader from "@/components/AppHeader"
import Sidebar from "@/components/Sidebar"
import { ImMenu } from "react-icons/im"
import { FaChartBar } from "react-icons/fa"
import applelogo from "../../assets/Images/apple-logo.svg"
import googleplay from "../../assets/Images/android-gpay.png"
import SettleUp from "@/components/SettleUp"

interface FriendBreakdown {
  user: {
    _id: string
    fullName: string
    email: string
    avatar: string
  }
  netBalance: number
}

interface DashboardData {
  totalYouOwe: number
  totalOwedToYou: number
  netBalance: number
  friendBreakdown: FriendBreakdown[]
}

export const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showExpense, setShowExpense] = useState(false)
  const [showSettleUp, setShowSettleUp] = useState(false)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await apiFetch("/dashboard")
        setStats(response.data)
      } catch (err: any) {
        setError(err.message || "Failed to fetch dashboard data")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-slate-100">
        <AppHeader />
        <div className="flex h-[70vh] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        </div>
      </div>
    )
  }
  return (
    <>
      <AppHeader />
      {/* {error && (
          <div className="mb-8 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )} */}

      <section className="flex gap-6">
        <Sidebar />
        <div className="w-140 border border-gray-300 shadow-[0_0_12px] shadow-black/20">
          <section className="bg-[#EEEEEE]">
            <div className="flex items-center justify-between px-4 py-3">
              <h1 className="text-2xl font-semibold text-[#333333]">
                Dashboard
              </h1>
              <div className="flex gap-2">
                <button onClick={()=> setShowExpense(true)} className="cursor-pointer rounded border border-orange-600 border-b-[#bd3808] bg-[#FF652F] px-3 py-1.5 text-[15px] tracking-tight text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#FF5216] active:scale-95">
                  Add an expense
                </button>
                {showExpense && (
                  <AddExpenseModal closeModal={() => setShowExpense(false)} />
                )}

                <button
                type="button"
                onClick={()=> setShowSettleUp(true)}
                className="cursor-pointer rounded border border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#48BE9D] active:scale-95">
                  Settle up
                </button>
                {showSettleUp && (
  <SettleUp
    onClose={() => setShowSettleUp(false)}
  />
)}
              </div>
            </div>
            <div className="flex justify-around border-t border-b border-[#e0dfdf] py-1">
              <div className="text-center text-[12px] text-[#999999]">
                <h1 className="text-[13px]">total balance</h1>
                <span>$0.00*</span>
              </div>
              <div className="border-r border-l border-[#e0dfdf] px-15 text-center text-[12px] text-[#999999]">
                <h1 className="text-[13px]">you owe</h1>
                <span>$0.00*</span>
              </div>
              <div className="text-center text-[12px] text-[#999999]">
                <h1 className="text-[13px]">you are owed</h1>
                <span>$0.00*</span>
              </div>
            </div>
            <div className="py-0.5 text-center text-[12px] text-[#999999]">
              * You have balances in multiple currencies.
            </div>
          </section>
          <section className="flex justify-between px-4 py-3">
            <h1 className="font-semibold tracking-tight text-[#999999] uppercase">
              you owe
            </h1>
            <div className="flex">
              <button className="flex items-center gap-0.5 rounded-l border-t border-b border-l border-[#e0dfdf] bg-[#EEEEEE] px-1 text-[12px] text-[#333333]">
                <ImMenu className="text-[14px]" /> <span>view as list</span>
              </button>
              <button className="flex items-center gap-0.5 rounded-r border-t border-r border-b border-[#e0dfdf] bg-[#EEEEEE] px-1 text-[12px] text-[#333333]">
                <FaChartBar className="text-[14px]" /> <span>view chart</span>
              </button>
            </div>
            <h1 className="font-semibold tracking-tight text-[#999999] uppercase">
              you are owed
            </h1>
          </section>
          <section className="flex justify-between px-3">
            <span className="tracking-tight text-[#999999]">
              You are not owed anything
            </span>
          </section>
        </div>
        <div className="w-45">
          <h1 className="mt-3.5 text-[13px] font-semibold text-[#999999] uppercase">
            splitwise on the go
          </h1>
          <p className="text-[13px] tracking-tight text-[#333333]">
            Get the free Splitwise app and add IOUs from anywhere:
          </p>
          <div className="mt-2 flex flex-col gap-2">
            <img src={applelogo} alt="" />
            <img src={googleplay} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
