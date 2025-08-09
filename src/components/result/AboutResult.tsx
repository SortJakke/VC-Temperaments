import type React from "react"
import jsonData from "../../data/temperaments.json"
import type { Temperaments } from "../../types/temperaments"

type TemperamentsNames = "choleric" | "melancholic" | "sanguine" | "phlegmatic"

interface Props {
  primary: TemperamentsNames
  secundary: TemperamentsNames
}

const data = jsonData as Temperaments

const AboutResult: React.FC<Props> = ({ primary, secundary }) => {
  const result = data[primary].combinations[secundary]

  type Section = "characteristic" | "challenges" | "skills"

  interface ListProps {
    title: string
    section: Section
  }

  const List: React.FC<ListProps> = ({ title, section }) => {
    return (
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">{title}:</h2>
        <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside">
          {result[section].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section className={`w-full md:w-4xl mx-auto px-6 grid gap-4 md:grid-rows-none md:grid-cols-2`}>
      <p className="text-gray-900">{result.desc}</p>
      <div className="grid gap-4">
        <List title="Pontos Fortes" section="characteristic" />
        <List title="Desafios" section="challenges" />
        <List title="Ideal Para" section="skills" />
      </div>
    </section>
  )
}

export default AboutResult
