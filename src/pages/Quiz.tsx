import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Questions } from "../components/Questions"
import questionsJson from "../data/questions.json"

const QUESTIONS_PER_PAGE = 10

export default function Quiz() {
  const data = questionsJson.questions
  const navigate = useNavigate()

  const [selected, setSelected] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("answers") || "[]")
    setSelected(saved)
  }, [])

  const totalPages = Math.ceil(data.length / QUESTIONS_PER_PAGE)
  const start = (currentPage - 1) * QUESTIONS_PER_PAGE
  const end = start + QUESTIONS_PER_PAGE
  const questionPages = data.slice(start, end)

  const Pagination = () => {
    return (
      <div className="flex justify-center space-x-2 text-2xl">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="cursor-pointer flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition disabled:text-gray-400"
          title="anterior"
        >
          &laquo;
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="cursor-pointer flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition disabled:text-gray-400"
          title="proximo"
        >
          &raquo;
        </button>
      </div>
    )
  }

  const handleResult = () => {
    if (selected.length === 0) {
      alert("Você precisa completar o teste antes de ver o resultado.")
      return
    }
    localStorage.setItem("answers", JSON.stringify(selected))
    navigate("/resultado")
  }

  return (
    <div className="h-screen overflow-y-scroll pb-[52px] md:h-auto md:min-h-screen md:overflow-hidden md:pb-0 md:pt-[58px]">
      <section className="bg-emerald-600 flex flex-col md:text-center md:items-center justify-center px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Teste de Temperamento
        </h1>
        <p className="text-xl text-gray-200 max-w-xl md:mx-auto mb-4">
          Marque as afirmações que representam você com sinceridade.
        </p>

        {currentPage === 1 && (
          <div>
            <p className="text-xl text-gray-200 max-w-xl md:mx-auto mb-4">
              São 232 afirmações sobre traços de personalidade que indicam um
              padrão de temperamento.
            </p>
            <p className="text-xl text-gray-200 max-w-xl md:mx-auto mb-4">
              As respostas serão analisadas na próxima etapa.
            </p>
            <p className="text-2xl text-gray-200 max-w-xl md:mx-auto mb-4">
              Boa Sorte!
            </p>
          </div>
        )}
      </section>
      <section className="flex flex-col gap-4 items-center justify-center py-6 px-6">
        {currentPage === totalPages && <Pagination />}

        <div className="w-full max-w-xl">
          {questionPages.map((item) => (
            <Questions
              key={item.id}
              id={item.id}
              question={item.question}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>

        {currentPage != totalPages && <Pagination />}

        <div>
          {currentPage === totalPages && (
            <button
              onClick={handleResult}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
            >
              Ver Resultado
            </button>
          )}
        </div>
      </section>
    </div>
  )
}
