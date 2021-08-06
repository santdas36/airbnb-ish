import { useState } from "react"
import { Calendar } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

export default function DatePicker() {
  const [date, setDate] = useState(new Date());

  function onChange(date) {
    setDate(date);
  }

  return <Calendar date={date} onChange={onChange} />;
}