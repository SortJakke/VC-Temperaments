import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import questionsJson from "../data/questions.json"

import HeroResult from "../components/result/HeroResult"
import TestAnalysis from "../components/result/TestAnalysis"
import AboutResult from "../components/result/AboutResult"
import Temperaments from "./Temperaments"
import EditTest from "../components/result/EditTest"
import RetakeTest from "../components/result/RetakeTest"
import Footer from "../components/Footer"

type Temperaments = "choleric" | "melancholic" | "phlegmatic" | "sanguine"

export default function Result() {
  const [data, setData] = useState<{
    choleric: number
    melancholic: number
    phlegmatic: number
    sanguine: number
  }>({
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0,
    sanguine: 0,
  })

  const navigate = useNavigate()

  const score = questionsJson.result

  const cholericIds = score.choleric
  const melancholicIds = score.melancholic
  const phlegmaticIds = score.phlegmatic
  const sanguineIds = score.sanguine

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers") || "[]")
    const coincidences = (group: number[]) =>
      answers.filter((id: number) => group.includes(id)).length

    setData({
      choleric: coincidences(cholericIds),
      melancholic: coincidences(melancholicIds),
      phlegmatic: coincidences(phlegmaticIds),
      sanguine: coincidences(sanguineIds),
    })
  }, [sanguineIds, cholericIds, melancholicIds, phlegmaticIds])

  function getTopTwo(
    obj: Record<string, number>
  ): [Temperaments, Temperaments] {
    const sortedEntries = Object.entries(obj).sort(([, a], [, b]) => b - a)
    const topTwo = sortedEntries.slice(0, 2)
    return [topTwo[0][0] as Temperaments, topTwo[1][0] as Temperaments]
  }

  const noAnswers = Object.values(data).every((valor) => valor === 0)

  const NoAnswers = () => {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-[400px] bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl mb-4 text-red-500">🚫 Acesso Negado</h2>
          <p className="text-lg mb-4 text-gray-800">
            Você precisa completar o teste antes de visualizar o resultado.
          </p>
          <button
            className="cursor-pointer py-3 px-6 text-lg bg-blue-500 text-white rounded-lg"
            onClick={() => {
              navigate("/teste")
            }}
          >
            Ir para o Teste
          </button>
        </div>
      </div>
    )
  }
  const HasAnswers = () => {
    return (
      <div className="grid gap-8">
        <HeroResult
          primary={getTopTwo(data)[0]}
          secundary={getTopTwo(data)[1]}
        />
        <AboutResult
          primary={getTopTwo(data)[0]}
          secundary={getTopTwo(data)[1]}
        />
        <TestAnalysis data={data} />
        <EditTest />
        <RetakeTest />
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col justify-between overflow-y-scroll pb-[52px] md:h-auto md:min-h-screen md:overflow-hidden md:pb-0 md:pt-[58px]">
      {noAnswers ? <NoAnswers /> : <HasAnswers />}
      <Footer />
    </div>
  )
}
