export default function TemperamentsCards() {
  const items = [
    {
      label: "Colérico",
      image: "choleric.svg",
      gradient: "bg-gradient-to-r from-red-300 to-white",
      hColor: "text-red-800",
      description: "Impulsivo, determinado e enérgico. Regido pelo fogo.",
    },
    {
      label: "Sanguíneo",
      image: "sanguine.svg",
      hColor: "text-yellow-800",
      gradient: "bg-gradient-to-r from-yellow-300 to-white",
      description: "Extrovertido, otimista e sociável. Regido pelo ar.",
    },
    {
      label: "Melancólico",
      image: "melancholic.svg",
      hColor: "text-green-800",
      gradient: "bg-gradient-to-r from-green-300 to-white",
      description: "Analítico, sensível e profundo. Regido pela terra.",
    },
    {
      label: "Fleumático",
      image: "phlegmatic.svg",
      hColor: "text-blue-800",
      gradient: "bg-gradient-to-r from-blue-300 to-white",
      description: "Calmo, paciente e diplomático. Regido pela água.",
    },
  ]

  interface TemperamentItem {
    label: string;
    image: string;
    gradient: string;
    hColor: string
    description: string;
  }

  interface CardProps {
    arr: TemperamentItem;
  }

  const Card: React.FC<CardProps> = ({ arr }) => {
    return (
      <div className="bg-white flex items-center rounded-lg overflow-hidden shadow hover:shadow-md transition">
        <figure className={`w-50 p-2 ${arr.gradient}`}>
          <img
            src={`/src/assets/${arr.image}`}
            alt={arr.label}
            className="w-full"
          />
        </figure>
        <div className="w-full p-2 grid justify-center">
          <h3 className={`${arr.hColor} text-xl font-semibold text-center mb-2`}>{arr.label}</h3>
          <p className="text-sm text-gray-600 text-center max-w-50">
            {arr.description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="px-6 bg-gray-50 text-emerald-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Os Quatro Temperamentos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            items.map((item, itemIdx) => (
              <Card arr={item} key={itemIdx}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
