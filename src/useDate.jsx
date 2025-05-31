import { useState } from 'react'

export default function useDate(initialValue = new Date()){
  const [currentDate, setCurrentDate] = useState(initialValue)

  const updateDate = () => {
    setCurrentDate(new Date())
  }

  return [currentDate, updateDate]
}