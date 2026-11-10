import { useState } from "react"
import logo from ".././assets/images/splitwiselogo.svg"
import { Link } from "react-router-dom"
import primarylogo from ".././assets/images/splitwiseprimery.svg"

const ForgotPassword = () => {
  const [resetMethod, setResetMethod] = useState("email")

  return (
    <section className="flex min-h-screen flex-col">
      <div className="flex w-full items-center justify-around border bg-[#5BC5A7] py-2.5 shadow-sm">
        <div className="flex cursor-pointer items-center gap-2 font-bold text-white">
          <img src={logo} alt="Sharebill Logo" className="h-6" />
        </div>
        <div className="flex items-center gap-2 text-white">
          <Link to="/login">
            <button className="rounded border border-[#3bb290] border-b-[#258368] bg-[#5BC5A7] px-2 py-0.5 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs">
              Log in
            </button>
          </Link>
          <span className="text-sm">or</span>
          <Link to="/signup">
            <button className="rounded border border-orange-600 border-b-orange-800 bg-[#FF652F] px-2 py-0.5 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#ff490d]">
              Sign up
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 flex min-h-full w-full flex-grow justify-center gap-6 px-4 font-sans text-gray-700">
        <Link to="/home" className=" ">
          <img src={primarylogo} alt="" className="h-32 object-contain" />
        </Link>
        <div className="w-80 py-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Reset your password
          </h1>
          <p className="leading-5">
            Enter your email address or phone number and we’ll send you a link
            to reset your password.
          </p>

          <div className="mt-4 flex">
            <button
              onClick={() => setResetMethod("email")}
              className={`cursor-pointer px-3 py-1 ${
                resetMethod === "email"
                  ? "rounded-t border border-[#DDDDDD] border-b-transparent text-gray-600"
                  : "border-b border-[#DDDDDD] text-[#0088CC]"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setResetMethod("phone")}
              className={`w-full cursor-pointer px-3 py-1 text-start ${
                resetMethod === "phone"
                  ? "rounded-t border border-[#DDDDDD] border-b-transparent text-gray-600"
                  : "border-b border-[#DDDDDD] text-[#0088CC]"
              }`}
            >
              Phone number
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-0.5">
            {resetMethod === "email" ? (
              <>
                <label className="tracking-tight">Your email address</label>
                <input
                  type="email"
                  className="active: w-60 rounded border border-[#DDDDDD] px-2 py-0.5 inset-shadow-xs inset-shadow-gray-200 focus:border-blue-300 focus:shadow-[0_0_8px_#93c5fd] focus:outline-none"
                />
                <label className="tracking-tight">Old password</label>
                <input
                  type="password"
                  className="active: w-60 rounded border border-[#DDDDDD] px-2 py-0.5 inset-shadow-xs inset-shadow-gray-200 focus:border-blue-300 focus:shadow-[0_0_8px_#93c5fd] focus:outline-none"
                />
                <label className="tracking-tight">New password</label>
                <input
                  type="password"
                  className="active: w-60 rounded border border-[#DDDDDD] px-2 py-0.5 inset-shadow-xs inset-shadow-gray-200 focus:border-blue-300 focus:shadow-[0_0_8px_#93c5fd] focus:outline-none"
                />
              </>
            ) : (
              <>
                <label className="tracking-tight">Your phone number</label>
                <input
                  type="tel"
                  maxLength={10}
                  className="active: w-60 rounded border border-[#DDDDDD] px-2 py-0.5 inset-shadow-xs inset-shadow-gray-200 focus:border-blue-300 focus:shadow-[0_0_8px_#93c5fd] focus:outline-none"
                />
              </>
            )}
          </div>

          <button className="mt-5 rounded border cursor-pointer border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs active:scale-95">
            Reset password
          </button>
        </div>
      </div>

      <footer className="w-full border-gray-100 bg-[#666666] py-6 text-sm  text-white text-shadow-2xs">
        <div className="mx-auto flex max-w-5xl flex-col justify-between px-4 md:flex-row">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl">Made with ☻ in Providence, RI, USA</h1>
            <p className="text-base">
              Copyright © 2026 Splitwise, Inc. All rights reserved.
            </p>
          </div>

          <ul className="flex h-4 items-center mt-3 font-semibold capitalize">
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                About
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                jobs
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                calculator
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                blog
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                terms
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                press
              </Link>
            </li>
            <li className="border-r border-r-white px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                api
              </Link>
            </li>
            <li className="px-2">
              <Link to="" className="border-b border-dashed border-b-[#929191] hover:border-white">
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export default ForgotPassword
