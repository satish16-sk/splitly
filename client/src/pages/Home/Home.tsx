import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import backgroundimg from "../../assets/Images/background.png"
import image1 from "../../assets/Images/iamge1.svg"
import image2 from "../../assets/Images/iamge2.svg"
import image3 from "../../assets/Images/image3.svg"
import image4 from "../../assets/images/image4.svg"
import planeimg from "../../assets/images/planeimg.svg"
import { FaApple } from "react-icons/fa"
import { DiAndroid } from "react-icons/di"
import phone1 from "../../assets/images/phone1.png"
import phone2 from "../../assets/images/phone2.png"
import phone3 from "../../assets/images/phone3.png"
import phone4 from "../../assets/images/phone4.png"
import phone5 from "../../assets/images/phone5.png"
import profeature from "../../assets/images/pro-feature.svg"
import corefeature from "../../assets/images/core-feature.svg"
import finacialtime from "../../assets/images/finacialtime.png"
import bussinesslogo from "../../assets/images/bussinelogo.png"
import nytime from "../../assets/images/nytime.png"
import Footer from "@/components/Footer"

const Home = () => {
  return (
  <>
  <Navbar/>
<section className="min-h flex justify-center">
        <img src={backgroundimg} alt="" className="absolute h-170 w-full" />
        <div className="relative flex w-full max-w-5xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
          <div className="mt-15 flex flex-1 flex-col justify-center py-10 text-black">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-700">
                Less stress when sharing expenses
              </h1>
              <h1 className="mt-2 text-5xl font-bold tracking-tight text-[#1CC29F] md:text-5xl">
                on trips.
              </h1>
            </div>

            <div className="my-5 flex gap-5">
              <img src={image1} alt="" className="h-10 w-10 object-contain" />
              <img src={image2} alt="" className="h-10 w-10 object-contain" />
              <img src={image3} alt="" className="h-10 w-10 object-contain" />
              <img src={image4} alt="" className="h-10 w-10 object-contain" />
            </div>

            <p className="mb-8 max-w-md pr-13 text-lg text-gray-700">
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family.
            </p>

            <div>
              <Link to="/signup">
                <button className="rounded bg-[#1CC29F] px-15 py-3.5 font-bold text-white capitalize shadow-[0_3px_0_#9695A5] hover:translate-y-1 hover:shadow-[0_0px_0_#9695A5]">
                  Sign up
                </button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-0.5 text-gray-700">
              free for <FaApple />
              iPhone, <DiAndroid /> Android, and web
            </div>
          </div>

          <div className="flex w-full flex-1 scale-130 items-center justify-center">
            <img
              src={planeimg}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="relative flex flex-1 flex-col items-center bg-[#383B3F] text-black">
          <img
            src={backgroundimg}
            alt=""
            className="absolute h-170 overflow-hidden object-cover"
          />
          <div className="px-65 text-center">
            <h1 className="mt-6 text-3xl font-bold text-white">
              Track balances
            </h1>
            <h1 className="text-l mt-2 text-center text-white">
              Keep track of shared expenses, balances, and who owes who.
            </h1>
          </div>
          <img src={phone1} alt="" className="mt-8 h-115" />
        </div>
        <div className="relative flex flex-1 flex-col items-center bg-[#1CC29F] text-black">
          <img
            src={backgroundimg}
            alt=""
            className="absolute h-170 overflow-hidden object-cover"
          />
          <div className="px-60 text-center">
            <h1 className="mt-6 text-3xl font-bold text-white">
              Organize expenses
            </h1>
            <h1 className="text-l mt-2 text-center text-white">
              Split expenses with any group: trips, housemates, friends, and
              family.
            </h1>
          </div>
          <img src={phone2} alt="" className="mt-8 h-115" />
        </div>
      </section>
      <section className="flex">
        <div className="relative flex flex-1 flex-col items-center bg-[#F67240] text-black">
          <img
            src={backgroundimg}
            alt=""
            className="absolute h-170 overflow-hidden object-cover"
          />
          <div className="px-60 text-center">
            <h1 className="mt-6 text-3xl font-bold text-white">
              Add expenses easily
            </h1>
            <h1 className="text-l mt-2 text-center text-white">
              Quickly add expenses on the go before you forget who paid.
            </h1>
          </div>
          <img src={phone3} alt="" className="mt-8 h-115" />
        </div>
        <div className="relative flex flex-1 flex-col items-center bg-[#383B3F] text-black">
          <img
            src={backgroundimg}
            alt=""
            className="absolute h-170 overflow-hidden object-cover"
          />
          <div className="px-60 text-center">
            <h1 className="mt-6 text-3xl font-bold text-white">
              Pay friends back
            </h1>
            <h1 className="text-l mt-2 text-center text-white">
              Settle up with a friend and record any cash or online payment.
            </h1>
          </div>
          <img src={phone4} alt="" className="mt-8 h-115" />
        </div>
      </section>

      <section className="relative flex h-150 items-center justify-center overflow-hidden bg-[#8656CD]">
        <img
          src={backgroundimg}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="relative z-1 flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-white">
            Get even more with PRO
          </h2>
          <p className="px-51 py-3 font-medium text-white">
            Get even more organized with receipt scanning, charts and graphs,
            currency conversion, and more!
          </p>
          <Link to="/signup">
            <button className="mt-4 -translate-y-1 rounded border border-white bg-[#11121337] px-11 py-3 font-semibold text-white shadow-[0_2px_0_#11121348] transition-all duration-150 ease-out hover:translate-y-0 hover:shadow-none">
              Sign up
            </button>
          </Link>
        </div>

        <div className="relative flex h-150 flex-1 items-end justify-center">
          <img src={phone5} alt="" className="h-115 object-contain" />
        </div>
      </section>

      {/* li section feature */}
      <section>
        <h1 className="mt-20 text-center text-5xl font-bold text-[#373B3F]">
          The whole nine yards
        </h1>
        <div className="mt-15 flex w-full px-45 text-xl tracking-tight text-[#373B3F]">
          <div className="flex flex-1 flex-col gap-4">
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Add groups and friends
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Split expenses, record debts
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Equal or unequal splits
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Split by % or shares
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Calculate total balances
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Simplify debts
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Recurring expenses
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Offline mode
            </li>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Cloud sync
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Spending totals
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Categorize expenses
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              7+ languages
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              100+ currencies
            </li>
            <li className="flex items-center gap-1">
              <img src={corefeature} alt="" />
              Payment integrations
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Unlimited expenses
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Transaction import
            </li>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Currency conversion
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Receipt scanning
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Itemization
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Charts and graphs
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Expense search
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Save default splits
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />A totally ad-free experience
            </li>
            <li className="flex items-center gap-1">
              <img src={profeature} alt="" />
              Early access to new features
            </li>
          </div>
        </div>
        <div className=" flex justify-center gap-6 mt-15">
          <div className="flex items-center gap-2 text-xl text-[#373B3F]"><img src={corefeature} alt="" />  Core features</div>
          <div className="flex items-center gap-2 text-xl text-[#8656CD]"><img src={profeature} alt="" />Pro features</div>
          </div>
      </section>
      {/*first section  */}
      <section className="flex flex-wrap px-45 mt-18 gap-5">
        <Link to="https://shorturl.at/HMmt9" className="flex-1 rounded border border-gray-200  bg-white p-5 font-sans -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-14 text-xl  font-light text-[#373B3F] ">
            “Fundamental” for tracking finances. As good as WhatsApp for
            containing awkwardness.
          </p>

          <div className="flex items-center gap-4">
            <img src={finacialtime} alt="" className="h-12 rounded" />
            <span className="font-serif text-xl text-black italic">
              Financial Times
            </span>
          </div>
        </Link>
        <div className="flex-1 rounded border border-gray-200 bg-white p-5 font-sans  -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-17 text-xl  font-light text-[#373B3F] ">
            Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!
          </p>

          <div className="flex items-center gap-4">
            <span className="font-serif text-xl text-black italic">
             Ahah S, iOS
            </span>
          </div>
        </div>
        <Link to="https://shorturl.at/68uW8" className="flex-1  rounded border border-gray-200 bg-white p-5 font-sans -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-22 text-xl  font-light text-[#373B3F] ">
           Makes it easy to split everything from your dinner bill to rent.


          </p>

          <div className="flex items-center gap-4">
            <img src={nytime} alt="" className="h-12 rounded" />
            <span className="font-serif text-xl text-black italic">
            NY Times
            </span>
          </div>
        </Link>
       
      </section>
      {/* second section */}
      <section className="flex flex-wrap px-45 mt-4 gap-5">
        <div className="flex-1 rounded border border-gray-200 bg-white p-5 font-sans -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-12 text-xl  font-light text-[#373B3F] ">
           So amazing to have this app manage balances and help keep money out of relationships. love it!
          </p>

          <div className="flex items-center gap-4">
            <span className="font-serif text-xl text-black italic">
            Haseena C, Android
            </span>
          </div>
        </div>
        <Link to="https://shorturl.at/hScIp" className="flex-1 rounded border border-gray-200 bg-white p-5 font-sans -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-12 text-xl  font-light text-[#373B3F] ">
          I never fight with roommates over bills because of this genius expense-splitting app
          </p>

          <div className="flex items-center gap-4">
            <img src={bussinesslogo} alt="" className="h-12 rounded" />
            <span className="font-serif text-xl text-black italic">
           Business Insider
            </span>
          </div>
        </Link>
        <div className="flex-1 rounded border border-gray-200 bg-white p-5 font-sans -translate-y-1 shadow-[0_2px_0_#9695A5] hover:translate-y-0 hover:shadow-none ">
          <p className="mb-22 text-xl  font-light text-[#373B3F] ">
            I use it everyday. I use it for trips, roommates, loans. I love splitwise.
          </p>

          <div className="flex center gap-4">
            <span className="font-serif text-xl text-black  italic">
             Trickseyus, iOS
            </span>
          </div>
        </div>
      </section>
      
      <Footer/>


  </>
  )
}

export default Home