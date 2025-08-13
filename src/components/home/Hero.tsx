import { Link } from "react-router-dom"

import heroImage from "../../assets/hero-bg.svg"

export default function Hero() {
  const answers = JSON.parse(localStorage.getItem("answers") || "[]")

  return (
    <section
      id="hero"
      className="hero-gradient flex flex-col md:text-center md:items-center justify-center px-6 py-8"
    >
      <div className="w-full h-auto max-w-3xl ">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Descubra o temperamento que guia suas emoções e decisões
        </h1>
        <p className="text-xl text-gray-200 max-w-xl mx-auto">
          Baseado na teoria clássica dos quatro temperamentos, nosso teste
          revela qual perfil domina sua forma de sentir e agir.
        </p>
        {answers.length > 0 ? (
          <Link to={"/resultado"}>
            <button className="cursor-pointer mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-800 transition">
              Ver Resultado
            </button>
          </Link>
        ) : (
          <Link to={"/teste"}>
            <button className="cursor-pointer mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-800 transition">
              Começar o Teste
            </button>
          </Link>
        )}
      </div>
      <img
        src={heroImage}
        alt="Ilustração representando os quatro temperamentos"
        className="w-full h-auto max-w-lg"
      />
    </section>
  )
}
