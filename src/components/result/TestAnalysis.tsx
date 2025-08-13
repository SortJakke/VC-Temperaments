import React from "react"

interface Temperaments {
  sanguine: number
  choleric: number
  melancholic: number
  phlegmatic: number
}

interface Props {
  data: Temperaments
}

function calcPercentage(
  obj: Temperaments,
): Record<keyof Temperaments, number> {
  const result: Record<keyof Temperaments, number> = {
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0,
    sanguine: 0,
  }

  for (const key of Object.keys(obj) as (keyof Temperaments)[]) {
    const ref = 82
    const val = obj[key]
    const percentage = (val / ref) * 100
    result[key] = parseFloat(percentage.toFixed())
  }

  return result
}

interface TemperamentData {
  name: string
  textColor: string
  bgColor: string
  mask: string
}

const TemperamentProfiles: Record<string, TemperamentData> = {
  choleric: {
    name: "Colérico",
    textColor: "text-red-600",
    bgColor: "bg-red-600",
    mask: "bg-red-200",
  },
  melancholic: {
    name: "Melancólico",
    textColor: "text-green-600",
    bgColor: "bg-green-600",
    mask: "bg-green-200",
  },
  phlegmatic: {
    name: "Fleumático",
    textColor: "text-blue-600",
    bgColor: "bg-blue-600",
    mask: "bg-blue-200",
  },
  sanguine: {
    name: "Sanguíneo",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-600",
    mask: "bg-yellow-200",
  },
}

const TestAnalysis: React.FC<Props> = ({ data }) => {
  const percentage = calcPercentage(data)

  return (
    <section className="w-full md:w-4xl mx-auto px-6 grid gap-4 text-left">
      <h2 className="text-lg font-bold">Distribuição de Temperamentos</h2>

      <div className="px-6 py-4 grid gap-4 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        {Object.entries(percentage).map(([type, percentage]) => (
          <div key={type} className="w-full grid gap-2">
            <div className="flex justify-between gap-1 items-center font-bold text-gray-600">
              <span>{TemperamentProfiles[type].name}:</span>
              <span className={`${TemperamentProfiles[type].textColor}`}>
                {percentage}%
              </span>
            </div>
            <div
              className={`w-full ${TemperamentProfiles[type].mask} rounded-full h-3 overflow-hidden`}
            >
              {
                <div
                  className={`h-3 rounded-full ${TemperamentProfiles[type].bgColor}`}
                  style={{ width: `${percentage}%` }}
                />
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestAnalysis
