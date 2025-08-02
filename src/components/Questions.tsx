// questionSwitch.tsx
import React from "react"

type QuestionsProps = {
  id: number
  question: string
  selected: number[]
  setSelected: (ids: number[]) => void
}

export const Questions: React.FC<QuestionsProps> = ({
  id,
  question,
  selected,
  setSelected,
}) => {
  const checked = selected.includes(id)

  const handleToggle = () => {
    if (checked) {
      setSelected(selected.filter((itemId) => itemId !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  return (
    <div className="grid gap-2 text-center bg-white p-4 rounded-lg shadow mb-4">
      <label htmlFor={`${id}-question`} className="text-gray-800">
        {id}. {question}
      </label>
      <div className="mx-auto relative inline-flex items-center cursor-pointer">
        <input
          id={`${id}-question`}
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="sr-only peer"
          title={question}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-emerald-500 transition-all duration-300"></div>
        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
      </div>
    </div>
  )
}
