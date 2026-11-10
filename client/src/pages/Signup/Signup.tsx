import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import image from "../../assets/Images/main-logo.svg"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
// import { Eye, EyeOff } from "lucide-react"

export const Signup: React.FC = () => {
  const { signup, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setpassword] = useState("")
  // const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showFields, setShowFields] = useState(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)

    if (e.target.value.trim().length > 0 && !showFields) {
      setShowFields(true)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email || !password) {
      setError("Please fill in all fields")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      await signup({
        fullName,
        username: username.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        password,
        phoneNumber: phoneNumber.trim()
      })
      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-25 flex min-h-screen font-sans justify-center">
      <div className="">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Link to="/">
            <img className="w-50 sm:w-48 md:w-56 lg:w-50 object-contain" src={image} alt="splitly logo" />
          </Link>
          <div className="flex flex-col max-w-xl space-y-5">
            <h2 className="font-bold text-sm tracking-widest text-gray-400">
              INTRODUCE YOURSELF
            </h2>
            <form onSubmit={handleSubmit}>
               {error && (
        <div className="mb-6 animate-pulse border border-red-500/20 bg-[#CC4455] p-4 text-sm text-white">
          {error}
        </div>
      )}
            <div>
              <p className="text-xl md:text-2xl  pb-1">Hi there! My name is </p>
              <input
                className="w-full rounded border border-gray-300 p-2 text-xl md:text-xl ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                type="text"
                required
                value={fullName}
                onChange={handleNameChange}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-2000 ease-out ${
                showFields ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
              }`}
            >

              <div className="mt-5">
                <label className="text-[18px] block">
                  Here's my{" "}
                  <span className="font-semibold">username</span>
                </label>
                <input
                  className="w-full rounded border border-gray-300 p-1 text-[20px] ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                  type="text"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <p className="text-[18px]">
                  Here's my{" "}
                  <span className="font-semibold">email address:</span>
                </p>
                <input
                  className="w-full rounded border border-gray-300 p-1 text-[20px] ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-5">
                <p className="text-[18px]">
                  Here's my{" "}
                  <span className="font-semibold">phone number</span>
                </p>
                <input
                  className="w-full rounded border border-gray-300 p-1 text-[20px] ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                  type="ph"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>


              <div className="mt-5">
                <p className="text-[18px]">
                  And here's my <span className="font-semibold">password:</span>
                </p>
                <input
                  className="w-full rounded border border-gray-300 p-1 text-[20px] ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer font-medium tracking-tight rounded bg-[#FF652F] px-3 py-2 text-[22px] text-white transition-colors hover:bg-[#FF5216]  shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs active:scale-95"
              >
                {isSubmitting ? "Signing up..." : "Sign me up!"}
              </button>
              
              <span className="text-sm text-gray-500">or</span>
              <button
              type="button"
               className="flex cursor-pointer items-center gap-2 rounded border border-gray-300 px-1 py-1 text-[12px]">
                <FcGoogle className="h-5 w-5" />{" "}
                <span className="text-gray-500">Sign up with Google</span>
              </button>
            </div>
            </form>
            <Link
              to="#"
              className="text-[14px] text-[#0088CC] hover:text-blue-900 hover:underline"
            >
              By signing up, you accept the Splitly Terms of Service.
            </Link>
            <p className="text-[14px] text-gray-400">
              Don't use USD for currency?{" "}
              <Link
                to="#"
                className="text-[#0088CC] hover:text-blue-900 hover:underline"
              >
                Click here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
