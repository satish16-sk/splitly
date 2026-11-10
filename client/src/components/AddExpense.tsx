import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { FaReceipt } from "react-icons/fa"
// import { MdImage } from "react-icons/md"
import DatePicker from "./DatePicker"

interface AddExpenseModalProps {
  closeModal: () => void
}

const AddExpense = ({ closeModal }: AddExpenseModalProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-white/70 shadow-md pt-24"
      onClick={closeModal}
    >
      <div
        className="h-[388px] w-[350px] overflow-hidden rounded border border-[#5d5b63] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#94919F] bg-[#5CC5A7] px-2 py-1">
          <h2 className="text-[18px] font-bold text-[#FFFFFF]">
            Add an expense
          </h2>

          <button
            onClick={closeModal}
            className="text-gray-100 cursor-pointer transition hover:text-gray-300"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="">
          {/* With You */}
          <div className="mb-6 flex items-center gap-1 border-b p-1.5">
            <span className="text-[14px] text-[#333333]">
              With <span className="font-semibold">you</span> and:
            </span>

            <input
              type="text"
              placeholder="Enter names or email addresses"
              className="flex-1 border-gray-300 px-2 py-1 text-[14px] font-bold tracking-tight text-[#555555] outline-none focus:border-[#18A582]"
            />
          </div>

          {/* Expense Section */}
          <div className="flex gap-5">
            {/* Receipt */}
            <div className="ml-7 flex h-18 w-18 items-center justify-center rounded-lg border bg-gray-50">
              <FaReceipt className="text-5xl text-gray-500" />
            </div>

            {/* Inputs */}
            <div className="flex flex-1 flex-col">
              <input
                placeholder="Enter a description"
                className="w-[12vw] border-b border-dotted text-[#333333] font-bold border-gray-300 text-lg outline-none"
              />

              <div className="mt-5 flex items-center">
                <span className="mr-2 text-2xl text-[#333333]">$</span>

                <input
                  type="number"
                  placeholder="0.00"
                  className="w-[10.5vw] border-b border-dotted text-[#555555] border-gray-300 text-3xl font-bold outline-none"
                />
              </div>
            </div>
          </div>

          {/* Paid By */}
          <div className="mt-3 text-center text-sm">
            <span>Paid by </span>
            <button className="rounded-2xl border border-dotted bg-gray-100 px-2 py-1 text-[#5CC5A7]">
              You
            </button>
            <span> and split </span>
            <button className="rounded-2xl border border-dotted bg-gray-100 px-2 py-1 text-[#5CC5A7]">
              equally
            </button>
            .
          </div>

          <p className="mt-0.5 text-center text-sm text-gray-500">
            (₹0.00/person)
          </p>

          {/* Footer Actions */}
          <div className="mx-3 mt-3 flex items-center justify-between">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDatePicker(true)}
                className="flex items-center gap-2 rounded-xl border border-[#D2CDCD] px-7 py-0.5 text-[13px] text-[#666666] hover:bg-gray-100"
              >
                {selectedDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
              </button>
              {showDatePicker && (
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  onClose={() => setShowDatePicker(false)}
                />
              )}
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-[#D2CDCD] px-7 py-0.5 text-[13px] text-[#666666] hover:bg-gray-100">
              Add image/notes
            </button>
          </div>
          <div className="mt-2 flex justify-center">
            <button className="flex items-center gap-2 rounded-xl border border-[#D2CDCD] px-7 py-0.5 text-[13px] text-[#666666] hover:bg-gray-100">
              No group{" "}
            </button>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-4 flex justify-end gap-3 border-t pt-2 p-2">
            <button
              onClick={closeModal}
              className="cursor-pointer rounded border border-[#DBDADA] border-b-[#DEDBE9] bg-[#f8f8f8] px-3 py-1.5 text-[15px] text-[#333333] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#e7e3e3] active:scale-95"
            >
              Cancel
            </button>

            <button className="cursor-pointer rounded border border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#48BE9D] active:scale-95">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddExpense
