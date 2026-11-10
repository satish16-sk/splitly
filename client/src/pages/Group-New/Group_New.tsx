import logo from "../../assets/Images/main-logo.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import sat from "../../assets/Images/satish.png"
import { MdOutlineMailOutline } from "react-icons/md"
// import { FaCaretDown } from "react-icons/fa"
// import { FaAngleDoubleRight } from "react-icons/fa"
import { FaQuestion } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Group_New = () => {
    
  const [fileName, setFileName] = useState("No file chosen")
    const [showFields, setShowFields] = useState(false)
      const [groupName, setGroupName] = useState("")
        const [showAdvanced, setShowAdvanced] = useState(false)
    const [members, setMembers] = useState([
  { id: 1, name: "", email: "" },
  { id: 2, name: "", email: "" },
  { id: 3, name: "", email: "" },
]);


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value)

    if (e.target.value.trim().length > 0 && !showFields) {
      setShowFields(true)
    }
  }

  const addMember = () => {
    setMembers([
      ...members,
      {
        id: Date.now(),
        name: "",
        email: "",
      },
    ])
  }

  const removeMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id))
  }

  const handleChange = (id: number, field: "name" | "email", value: string) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      )
    )
  }

  

  const handleAdvanced = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowAdvanced(true)
  }

  const [groupType, setGroupType] = useState("Home")
  const groupTypeInfo = {
    Home: {
      heading: "SETTLE UP DAY: OFF",
      desc: "Currently, the settle up day can only be changed on the Splitwise app. Please use the app to update this setting.",
    },
    Trip: {
      heading: "TRIP DATES: OFF",
      desc: "Currently, trip dates can only be changed on the Splitwise app. Please use the app to update this setting.",
    },
    Couple: {
      heading: "BALANCE ALERT: OFF",
      desc: "Currently, balance alerts can only be changed on the Splitwise app. Please use the app to update this setting.",
    },
    Other: {
      heading: "",
      desc: "",
    },
  }

  return (
    <>
      <section className="flex min-h-screen grow justify-center gap-10 mt-30">
        <div>
          <img src={logo} alt="splitwise logo" className="w-50 object-contain" />
          <label className="mt-4 flex cursor-pointer items-center justify-center gap-2">
            <span className="border border-black bg-gray-200 px-2 text-[13px] ">
              Choose file
            </span>
            <span className="text-sm text-gray-700">{fileName}</span>
            <input
              type="file"
              className="hidden"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name || "No file chosen")
              }
            />
          </label>
        </div>

        <div>
          <div className="pb-5">
            <h2 className="font-semibold text-[#999999]">
              START A NEW GROUP
            </h2>
            
            <label className="mb-1 mt-2 block text-[24px] text-[#333333]" htmlFor="">
              My group shall be called...
            </label>{" "}
            <input
              type="text"
              onChange={handleNameChange}
              placeholder="The Breakfast Club"
              className="w-full border border-[#D3D3D3] bg-[#FFFFFF] p-1 text-3xl rounded  ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
            />
            <div
              className={`overflow-hidden transition-all duration-2000 ease-out ${
                showFields ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
          
          <div className="mt-6 border-b border-t pb-5">
            <h2 className="text-[16px] mt-4 font-semibold text-[#999999]">
              GROUP MEMBERS
            </h2>
            <p className="mt-1 text-[12px] text-[#999999]">
              Tip: Lots of people to add? send your friends an{" "}
              <Link className="text-[#0088CC]" to="#">
                invite link.
              </Link>
            </p>
            <div className="mt-2 flex items-center gap-1">
              <img
                src={sat}
                alt=""
                className="w-7 rounded-full object-contain"
              />
              <p className="text-[14px] text-[#333333]">
                satish <span className="">(satish.k1607@gmail.com)</span>
              </p>
            </div>
    
            {members.map((member) => (
              <div key={member.id} className="flex mt-2 items-center gap-2">
                <MdOutlineMailOutline className="text-l mb-1 text-gray-400" />

                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) =>
                    handleChange(member.id, "name", e.target.value)
                  }
                  className="mb-1 w-32 rounded border px-2 py-1 text-sm ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                />

                <input
                  type="email"
                  placeholder="Email address (optional)"
                  value={member.email}
                  onChange={(e) =>
                    handleChange(member.id, "email", e.target.value)
                  }
                  className="mb-1 w-50 rounded border px-2 py-1 text-sm ring-blue-100 outline-none focus:border-blue-400 focus:ring-2 duration-400"
                />

                {/* <button  > */}
                  <IoClose
                  onClick={() => removeMember(member.id)}
                    size={17}
                    className="mb-1 text-red-600 cursor-pointer transition hover:scale-110 hover:border-b-2 hover:border-red-600"
                  />
                {/* </button> */}
              </div>
              ))}
          

            <button
              onClick={addMember}
              className="text-sm mt-2 text-[13px] text-[#0088CC] hover:underline cursor-pointer"
            >
              + Add a person
            </button>
          </div>
          <div>
                  <h2 className="mt-4 mb-2.5 text-[17px] font-semibold text-gray-400 uppercase">
                    group type
                  </h2>
                  <select
                    name=""
                    id=""
                    value={groupType}
                    onChange={(e) => setGroupType(e.target.value)}
                    className="rounded border border-gray-300 bg-gray-100 p-0.5 py-1 text-[14px] hover:bg-gray-200"
                  >
                    <option value="Home">Home</option>
                    <option value="Trip">Trip</option>
                    <option value="Couple">Couple</option>
                    <option value="Other">Other</option>
                  </select>
                  <h2 className="mt-4 mb-2.5 text-[17px] font-semibold text-gray-400 uppercase">
                    {
                      groupTypeInfo[groupType as keyof typeof groupTypeInfo]
                        .heading
                    }
                  </h2>
                  <p className="w-92 text-[14px] text-gray-500">
                    {
                      groupTypeInfo[groupType as keyof typeof groupTypeInfo]
                        .desc
                    }
                  </p>
                  <hr className="mt-4.5 mb-3" />
                  {!showAdvanced ? (
                    <>
                      <a
                        href=""
                        onClick={handleAdvanced}
                        className="text-[13px] text-sky-600 hover:text-blue-900 hover:underline"
                      >
                        Advanced settings »
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <h2 className="text-[17px] font-semibold text-gray-400 uppercase">
                          simplify group debts?
                        </h2>
                        <Switch id="airplane-mode" />
                        <HoverCard>
                          <HoverCardTrigger
                            delay={10}
                            closeDelay={100}
                            render={
                              <Button variant="default">
                                <FaQuestion className="cursor-pointer rounded-full bg-gray-400 p-[3px] text-white" />
                              </Button>
                            }
                          />
                          <HoverCardContent>
                            <div className="flex flex-col justify-between gap-6 text-center">
                              <p>
                                This setting automatically combines debts to
                                reduce the total number of repayments between
                                group members.
                              </p>
                              <p>
                                For example, if you owe Anna $10 and Anna owes
                                Bob $10, a group with simplified debts will tell
                                you to pay Bob $10 directly.
                              </p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </>
                  )}
                </div>
          
          </div>
          </div>
          <button
            type="submit"
            className=" mt-4 mb-8 cursor-pointer rounded-[6px] bg-[#FF652F] px-4 border-[#FF652F] py-2 text-[18px] text-white hover:bg-[#FF5216] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs active:scale-95"
          >
            Save{" "}
          </button>
        </div>
      </section>
    </>
  )
}

export default Group_New
