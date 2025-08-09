import React from "react"

type Temperaments = "choleric" | "melancholic" | "sanguine" | "phlegmatic"

interface Props {
  primary: Temperaments
  secundary: Temperaments
}

interface TemperamentsData {
  name: string
  nickname: string
  description: string
  bgColor: string
  border: string
}

const temperamentProfiles: Record<string, TemperamentsData> = {
  sanguine_choleric: {
    name: "Sanguíneo | Colérico",
    nickname: "O Inspirador",
    description:
      "Ação impulsiva guiada por entusiasmo: vive intensamente e age com paixão.",
    bgColor: "bg-amber-700",
    border: "border-amber-700",
  },
  sanguine_melancholic: {
    name: "Sanguíneo | Melancólico",
    nickname: "O Artista Sensível",
    description:
      "Sociável e sensível, equilibra alegria com profundidade emocional.",
    bgColor: "bg-lime-700",
    border: "border-lime-700",
  },
  sanguine_phlegmatic: {
    name: "Sanguíneo | Fleumático",
    nickname: "O Comunicador Gentil",
    description:
      "Leve e constante, transmite calma com um sorriso e resolve conflitos com gentileza.",
    bgColor: "bg-teal-600",
    border: "border-teal-600",
  },
  choleric_sanguine: {
    name: "Colérico | Sanguíneo",
    nickname: "O Visionário",
    description:
      "Líder enérgico e contagiante que transforma ideias em movimento com carisma.",
    bgColor: "bg-orange-600",
    border: "border-orange-600",
  },
  choleric_melancholic: {
    name: "Colérico | Melancólico",
    nickname: "O Determinado",
    description:
      "Determinado com propósito: age com força guiado por princípios profundos.",
    bgColor: "bg-amber-900",
    border: "border-amber-900",
  },
  choleric_phlegmatic: {
    name: "Colérico | Fleumático",
    nickname: "O Gestor Equilibrado",
    description:
      "Firme e estratégico, lidera com lógica e constância silenciosa.",
    bgColor: "bg-purple-600",
    border: "border-purple-600",
  },
  melancholic_sanguine: {
    name: "Melancólico | Sanguíneo",
    nickname: "O Romântico",
    description:
      "Emotivo e expressivo, sente com profundidade e compartilha com generosidade.",
    bgColor: "bg-green-700",
    border: "border-green-700",
  },
  melancholic_choleric: {
    name: "Melancólico | Colérico",
    nickname: "O Estrategista",
    description:
      "Idealista e intenso, pensa antes de agir com convicção implacável.",
    bgColor: "bg-rose-900",
    border: "border-rose-900",
  },
  melancholic_phlegmatic: {
    name: "Melancólico | Fleumático",
    nickname: "O Conselheiro Silencioso",
    description:
      "Profundo e sereno, analisa tudo e se move com prudência e silêncio.",
    bgColor: "bg-cyan-700",
    border: "border-cyan-700",
  },
  phlegmatic_sanguine: {
    name: "Fleumático | Sanguíneo",
    nickname: "O Pacificador Alegre",
    description:
      "Calmo por fora, mas alegre por dentro — equilibra paz com leveza.",
    bgColor: "bg-sky-600",
    border: "border-sky-600",
  },
  phlegmatic_choleric: {
    name: "Fleumático | Colérico",
    nickname: "O Executor Silencioso",
    description:
      "Controlado e determinado: age com paciência, mas sem perder o foco.",
    bgColor: "bg-violet-700",
    border: "border-violet-700",
  },
  phlegmatic_melancholic: {
    name: "Fleumático | Melancólico",
    nickname: "O Guardião da Alma",
    description:
      "Contido, gentil e introspectivo, prefere observar antes de se envolver.",
    bgColor: "bg-emerald-600",
    border: "border-emerald-600",
  },
}

const HeroResult: React.FC<Props> = ({ primary, secundary }) => {
  const group = `${primary}_${secundary}`

  return (
    <section
      className={`w-full md:w-4xl mx-auto grid gap-2 md:grid-cols-2 text-gray-900`}
    >
      <div
        className={`py-8 px-6 grid gap-2 text-center text-gray-100 ${temperamentProfiles[group].bgColor} md:rounded-b-2xl`}
      >
        <span className="text-xl font-bold">Parabéns você é:</span>
        <h1 className="text-3xl font-bold">
          {temperamentProfiles[group].nickname}
        </h1>
        <span className="text-lg">{temperamentProfiles[group].name}</span>
      </div>

      <div className="px-6 grid gap-4 md:pt-6">
        <img
          src={`/assets/archetypes/${group}.svg`}
          alt={`Ilustração do temperamento ${temperamentProfiles[group].name}`}
          className="max-w-2xl min-h-[200px] mx-auto text-center"
        />

        <p
          className={`mx-auto border-l-3 ${temperamentProfiles[group].border} px-2 text-left font-medium`}
        >
          {temperamentProfiles[group].description}
        </p>
      </div>
    </section>
  )
}

export default HeroResult
