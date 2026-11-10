import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface DatePickerProps {
  value: Date
  onChange: (date: Date) => void
  onClose: () => void
}

const DatePicker = ({ value, onChange, onClose }: DatePickerProps) => {

  const [currentMonth, setCurrentMonth] = useState(
    new Date(value.getFullYear(), value.getMonth(), 1)
  )

  const [selectedDate, setSelectedDate] = useState(value)

  const [repeat, setRepeat] = useState("Just this once")
  const [reminder, setReminder] = useState("No reminder")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const calendarDays = []

  // Previous month's empty days
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const selectDate = (day: number) => {
    const newDate = new Date(year, month, day)
    setSelectedDate(newDate)
  }

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    )
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const handleDone = () => {
    onChange(selectedDate)
    onClose()
  }

  return (
<div className="fixed left-[calc(50%+95px)] top-[100px] z-[100] w-[310px] rounded-md border border-gray-300 bg-white shadow-[0_4px_15px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#5bc5a7] px-4 py-2 text-white">
        <h2 className="text-[18px] font-bold text-[#FFFFFF]">
          Choose date
        </h2>

        <IoClose
          size={26}
          className="cursor-pointer text-2xl font-bold text-white"
          onClick={onClose}
        />
      </div>

      {/* Calendar */}
      <div className="px-3 py-3">

        {/* Month navigation */}
        <div className="mb-3 flex items-center justify-between">

          <button
            type="button"
            onClick={previousMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <FaChevronLeft size={14} />
          </button>

          <h3 className="text-[17px] font-semibold">
            {monthNames[month]} {year}
          </h3>

          <button
            type="button"
            onClick={nextMonth}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <FaChevronRight size={14} />
          </button>

        </div>

        {/* Week days */}
        <div className="grid grid-cols-7 text-center">
          {days.map((day) => (
            <div
              key={day}
              className="py-1 text-[13px] font-semibold text-gray-700"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar dates */}
        <div className="grid grid-cols-7 text-center">

          {calendarDays.map((day, index) => (
            <div key={index} className="flex justify-center py-1">

              {day && (
                <button
                  type="button"
                  onClick={() => selectDate(day)}
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-[14px] transition
                    ${
                      isSelected(day)
                        ? "bg-[#5bc5a7] text-white"
                        : "text-gray-800 hover:bg-gray-100"
                    }
                  `}
                >
                  {day}
                </button>
              )}

            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-200" />

        {/* Repeats */}
        <div className="mb-3 flex items-center justify-between">

          <span className="text-[15px] text-gray-700">
            Repeats:
          </span>

          <select
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
            className="rounded border border-gray-300 bg-white px-2 py-1 text-[13px] outline-none focus:border-[#5bc5a7]"
          >
            <option>Just this once</option>
            <option>Every week</option>
            <option>Every month</option>
            <option>Every year</option>
          </select>

        </div>

        {/* Reminder */}
        <div className="flex items-center justify-between">

          <span className="text-[15px] text-gray-700">
            Reminder:
          </span>

          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="rounded border border-gray-300 bg-white px-2 py-1 text-[13px] outline-none focus:border-[#5bc5a7]"
          >
            <option>No reminder</option>
            <option>5 minutes before</option>
            <option>15 minutes before</option>
            <option>1 hour before</option>
            <option>1 day before</option>
          </select>

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-end gap-2 border-t border-gray-200 px-4 py-3">

        <button
          type="button"
          onClick={onClose}
          className="rounded border border-gray-300 bg-white px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleDone}
          className="rounded bg-[#5bc5a7] px-4 py-2 text-[14px] text-white hover:bg-[#48b596]"
        >
          Done
        </button>

      </div>
    </div>
  )
}

export default DatePicker