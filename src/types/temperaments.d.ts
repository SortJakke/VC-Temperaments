type TemperamentsNames = "choleric" | "melancholic" | "sanguine" | "phlegmatic"

type TemperamentCombination = {
  desc: string
  characteristic: string[]
  challenges: string[]
  skills: string[]
}

type Temperament = {
  desc: string
  combinations: Record<TemperamentsNames, TemperamentCombination>
}

export type Temperaments = Record<TemperamentsNames, Temperament>
