import { IoClose } from "react-icons/io5"
import paypal from "../assets/Images/paypal-logo.png"

interface SettleUpModalProps {
  onClose: () => void
}

const SettleUp = ({ onClose }: SettleUpModalProps) => {
  const handleCashPayment = () => {
    console.log("Record a cash payment")
  }

  const handlePaypal = () => {
    console.log("PayPal selected")
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-white/70 shadow-md pt-25"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="h-[300px] w-[350px] overflow-hidden rounded border border-gray-400 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#5CC5A7] px-2 py-1 text-white">
          <h2 className="text-[18px] font-semibold">Settle up</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-100 cursor-pointer transition hover:text-gray-300"
          >
            <IoClose size={22}  />
          </button>
        </div>

        {/* Content */}
        <div className="">
          <h3 className="mt-2.5 text-center text-[16px] text-gray-600">
            Choose a payment method
          </h3>

          {/* Cash payment */}
          <div className="mx-8">
            <button
              type="button"
              onClick={handleCashPayment}
              className="mt-3 w-full cursor-pointer rounded border border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#48BE9D] active:scale-95"
            >
              Record a cash payment
            </button>

            {/* PayPal */}
            <button
              type="button"
              onClick={handlePaypal}
              className="mt-3 flex w-full cursor-pointer items-center justify-center rounded border border-gray-300 border-b-[#C7C7C7] bg-white px-3 py-1.5 shadow-sm transition hover:bg-[#F2F2F2]"
            >
              <img src={paypal} alt="" className="w-[10vw] object-contain" />
            </button>
          </div>

          {/* Information */}
          <p className="mt-5 px-1 text-center text-[11px] tracking-tight text-[#AAAAAA]">
            When you use a payment service, your payment is shared with that
            company under its Privacy Policy and Terms, including any fees if
            applicable. Splitwise charges no additional fees.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 flex justify-end gap-2 border-t border-gray-200 px-3.5 py-1.5">
          <button className="cursor-pointer rounded border border-[#DBDADA] border-b-[#DEDBE9] bg-[#f8f8f8] px-3 py-1.5 text-[15px] text-[#333333] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#e7e3e3] active:scale-95">
            Cancel
          </button>

          <button className="cursor-pointer rounded border border-[#44bd9b] border-b-[#39A385] bg-[#5BC5A7] px-3 py-1.5 text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] text-shadow-2xs hover:bg-[#48BE9D] active:scale-95">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettleUp
