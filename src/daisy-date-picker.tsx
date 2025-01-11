import React, { useState } from 'react'

import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

type DateReaderProps = {
  date: Date
  setDate: (date: Date) => void
  disabled?: boolean
  className?: string
}

export function DaisyDatePicker({
  date: fecha,
  setDate: setFecha,
  disabled = false,
  className = ''
}: DateReaderProps) {
  const [calendar, setCalendar] = useState(false)
  const [date, setDate] = useState<Date | undefined>(fecha)

  const configDate = (date: Date | undefined) => {
    setDate(date)
    if (!date) date = new Date()
    setFecha(date)
  }

  const toggleDate = () => {
    setCalendar(!calendar)
  }
  let footer = ''
  try {
    footer = date ? date.toLocaleDateString() : 'Select a date'
  } catch (error) {
    console.log({ error })
  }

  return (
    <div className={className}>
      <button
        onClick={toggleDate}
        type='button'
        className='btn btn-sm'
        disabled={disabled}
      >
        {footer}
      </button>
      <div
        className={` absolute opacity-100 bg-base-300 z-50 p-2 ${
          calendar ? 'block' : 'hidden'
        }`}
      >
        <DayPicker
          mode='single'
          selected={date}
          onSelect={(value: any) => {
            configDate(value)
            setCalendar(false)
          }}
        />
        <div className='mb-2 flex justify-between mt-1'>
          <button
            type='button'
            onClick={() => configDate(new Date())}
            className='btn btn-xs mr-1'
          >
            Today
          </button>
          <button onClick={() => setCalendar(false)} className='btn btn-xs'>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
