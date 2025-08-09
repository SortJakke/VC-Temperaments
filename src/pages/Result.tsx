import { useEffect, useState } from "react"
import questionsJson from "../data/questions.json"

import HeroResult from "../components/result/HeroResult"
import TestAnalysis from "../components/result/TestAnalysis"
import AboutResult from "../components/result/AboutResult"
import Temperaments from "./Temperaments"
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

  const score = questionsJson.result

  const cholericIds = score.choleric
  const melancholicIds = score.melancholic
  const phlegmaticIds = score.phlegmatic
  const sanguineIds = score.sanguine

  const reference = {
    choleric: cholericIds.length,
    melancholic: melancholicIds.length,
    phlegmatic: phlegmaticIds.length,
    sanguine: sanguineIds.length,
  }

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

  return (
    <div className="h-screen grid gap-12 overflow-y-scroll mb-[52px] md:h-auto md:overflow-hidden md:mb-0 md:mt-[58px]">
      <HeroResult primary={getTopTwo(data)[0]} secundary={getTopTwo(data)[1]} />
      <AboutResult
        primary={getTopTwo(data)[0]}
        secundary={getTopTwo(data)[1]}
      />
      <TestAnalysis data={data} ref={reference} />
      <RetakeTest />
      <Footer />
    </div>
  )
}
