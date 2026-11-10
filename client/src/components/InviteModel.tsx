import { IoClose } from "react-icons/io5"
import img from "../assets/Images/main-logo.svg"
interface InviteModalProps {
  closeModal: () => void
}

const InviteModal = ({ closeModal }: InviteModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 pb-78"
      onClick={closeModal}
    >
      <div
  className="relative mr-8.5 w-[560px] rounded-[7px] border border-slate-600 bg-white p-4 shadow-xl"
  onClick={(e) => e.stopPropagation()}
>
  <div className="mb-6 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <img src={img} alt="Logo" className="w-7.5" />
      <h2 className="text-2xl font-bold text-[#333333]">
        Invite friends
      </h2>
    </div>

    <button
      onClick={closeModal}
      className="text-gray-300 cursor-pointer transition hover:text-gray-400"
    >
      <IoClose size={24} />
    </button>
  </div>

  <input
    type="text"
    placeholder="Enter names or email addresses"
    className="w-full text-sm rounded border border-gray-300 p-2 outline-none"
  />

  <div className="mt-2 flex justify-end">
    <button className="cursor-pointer rounded-[6px] bg-[#FF652F] px-4 border-[#FF652F] py-2 text-[18px] text-white hover:bg-[#FF5216] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs active:scale-95">
      Send invites and add friends
    </button>
  </div>
</div>
    </div>
  )
}

export default InviteModal
