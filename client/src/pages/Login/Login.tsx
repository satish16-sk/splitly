import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

import Navbar from "@/components/Navbar"
import bg_img from "../../assets/Images/facets.png"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"

export const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-cover bg-center">
        <img src={bg_img} alt="" className="absolute h-170 w-full" />
        <form onSubmit={handleSubmit}>
        <div className="relative mt-8 flex w-[42vw] flex-col rounded-xl bg-white p-10 shadow-2xl">
          <h2 className="mb-4 text-[28px]">Log in</h2>
                    {error && (
            <div className="mb-6 animate-pulse border border-red-500/20 bg-[#CC4455] p-4 text-sm text-white">
              {error}
            </div>
                    )}
          <div>
            <p className="text-[18px]">Email address</p>
            <input
              className="w-full border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-[#18A582]"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <p className="text-[18px]">Password</p>
            <input
              className="w-full border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-[#18A582]"
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center pt-8">
            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded bg-[#18A582] py-2 text-[16px] font-bold text-white shadow-[0_2px_0_0_rgba(55,59,63,0.5)] transition hover:translate-y-1 hover:shadow-none">
              {isSubmitting ? 'Logged in...': 'Log in'}
              
            </button>
          </div>
          <div className="flex justify-center pt-5 font-semibold text-[#18A582]">
            <Link to="/forgotpass">Forgot your password?</Link>
          </div>

          <div className="flex items-center justify-center gap-3 pt-8 pb-4">
            <div className="h-px w-14 bg-gray-300"></div>
            <span className="font-bold text-gray-400">or</span>
            <div className="h-px w-14 bg-gray-300"></div>
          </div>

          <button
          type="button"
           className="items-cente flex w-full cursor-pointer justify-center gap-3 rounded border border-gray-300 bg-white py-2 shadow-[0_2px_0_0_rgba(55,59,63,0.5)] transition hover:translate-y-1 hover:shadow-none">
            <FcGoogle className="text-2xl" />
            <span className="font-semibold">Sign in with Google</span>
          </button>
        </div>
          </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
