import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

const RetakeTest: React.FC = () => {
  const [confirm, setConfirm] = useState(false)
  const navigate = useNavigate()

  const retake = () => {
    setConfirm(false)
    localStorage.clear()
    navigate("/teste")
  }

  return (
    <section className="w-full md:w-4xl mx-auto px-6 text-center md:text-right">
      <button
        onClick={() => setConfirm(true)}
        className="w-[150px] cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded shadow-md transition duration-300"
      >
        Refazer Teste
      </button>
      {confirm && (
        <div className="fixed inset-0 p-6 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Tem certeza?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Isso vai apagar os dados atuais e reiniciar o teste.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={retake}
                className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Sim, apagar
              </button>
              <button
                onClick={() => setConfirm(false)}
                className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default RetakeTest
