import { useNavigate } from "react-router-dom"

const EditTest: React.FC = () => {
  const navigate = useNavigate()

  const edit = () => {
    navigate("/teste")
  }

  return (
    <section className="w-full md:w-4xl mx-auto px-6 text-center md:text-right">
      <button
        onClick={edit}
        className="w-[150px] cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-md transition duration-300"
      >
        Editar Teste
      </button>
    </section>
  )
}

export default EditTest
