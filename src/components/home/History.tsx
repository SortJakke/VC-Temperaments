export default function History() {
  return (
    <section
      id="history"
      className="py-8 px-6 md:px-0 flex flex-col bg-gray-100 text-gray-800"
    >
      <h2 className="md:w-4xl md:mx-auto text-emerald-800 text-3xl md:text-4xl font-bold mb-6">
        Um pouco de História
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold">Origem dos temperamentos</h3>
          <p className="text-md mb-2">
            Na Grécia do século V a.C., Hipócrates propôs que o comportamento
            humano era influenciado pelo equilíbrio entre quatro humores:
            sangue, bílis amarela, bílis negra e fleuma. Cada um corresponde a
            um temperamento: sanguíneo, colérico, melancólico e fleumático.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Evolução ao longo dos anos:</h3>
          <ul className="list-disc pl-6 grid gap-2">
            <li>
              <strong>Galeno</strong>, no século II d.C., sistematizou essa
              teoria e nomeou os temperamentos.
            </li>
            <li>
              Pensadores como{" "}
              <strong>Platão, Aristóteles e Tomás de Aquino</strong> usaram essa
              abordagem pera refletir sobre saúde e personalidade.
            </li>
            <li>
              Durante a <strong>Idade media</strong> e o{" "}
              <strong>Renascimento</strong>, os temperamentos foram incorporados
              à medicina, filosofia cristã e práticas pedagógicas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
