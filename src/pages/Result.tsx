import { useEffect, useState } from "react"
import questionsJson from "../data/questions.json"

export default function Result() {
  const [dados, setDados] = useState<{
    sanguine: number
    choleric: number
    melancholic: number
    phlegmatic: number
  }>({
    sanguine: 0,
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0,
  })

  useEffect(() => {
    const respostas = JSON.parse(localStorage.getItem("answers") || "[]")

    const data = questionsJson.result

    const sanguineIds = data.sanguine
    const cholericIds = data.choleric
    const melancholicIds = data.melancholic
    const phlegmaticIds = data.phlegmatic

    const contarCoincidencias = (grupo: number[]) =>
      respostas.filter((id: number) => grupo.includes(id)).length

    setDados({
      sanguine: contarCoincidencias(sanguineIds),
      choleric: contarCoincidencias(cholericIds),
      melancholic: contarCoincidencias(melancholicIds),
      phlegmatic: contarCoincidencias(phlegmaticIds),
    })
  }, [])

  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Seu Resultado</h1>

      <div className="grid grid-cols-2 gap-6 text-left text-gray-800">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Sanguíneo</h2>
          <p>{dados.sanguine} respostas coincidem</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Colérico</h2>
          <p>{dados.choleric} respostas coincidem</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Melancólico</h2>
          <p>{dados.melancholic} respostas coincidem</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Fleumático</h2>
          <p>{dados.phlegmatic} respostas coincidem</p>
        </div>
      </div>
    </div>
  )
}
