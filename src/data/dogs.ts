import type { DogSlide } from "../types/slide";
import { getAgeAltText } from "../utils/age-formatters";

type DogSource = Omit<DogSlide, "alt" | "img">;

const dogs: DogSource[] = [
  {
    name: "Tyler",
    ageInMonths: 36,
    sex: "male",
    desc: "Energetic and playful dog, loves to run and fetch the ball.",
  },
  {
    name: "Toby",
    ageInMonths: 60,
    sex: "male",
    desc: "Calm and friendly dog, perfect for families with children.",
  },
  {
    name: "Maggie",
    ageInMonths: 12,
    sex: "female",
    desc: "Curious and energetic puppy, loves to explore new places.",
  },
  {
    name: "Charlie",
    ageInMonths: 48,
    sex: "male",
    desc: "Loyal and protective dog, great companion for the whole family.",
  },
  {
    name: "Mike",
    ageInMonths: 24,
    sex: "male",
    desc: "Young and active, loves outdoor activities and making new friends.",
  },
  {
    name: "Bella",
    ageInMonths: 5,
    sex: "female",
    desc: "Sweet and affectionate puppy, always ready to give love.",
  },
  {
    name: "Rocky",
    ageInMonths: 36,
    sex: "male",
    desc: "Adventurous and brave dog, loves trails and long walks.",
  },
  {
    name: "Luna",
    ageInMonths: 36,
    sex: "female",
    desc: "Gentle and calm dog, ideal for quieter environments.",
  },
  {
    name: "Daisy",
    ageInMonths: 8,
    sex: "female",
    desc: "Cheerful and sociable puppy, loves meeting people and other dogs.",
  },
  {
    name: "Molly",
    ageInMonths: 24,
    sex: "female",
    desc: "Affectionate and intelligent dog, learns commands quickly.",
  },
  {
    name: "Lilly",
    ageInMonths: 72,
    sex: "female",
    desc: "Experienced and wise dog, calm and companion for peaceful moments.",
  },
  {
    name: "Lucy",
    ageInMonths: 60,
    sex: "female",
    desc: "Docile and patient dog, excellent for living with other pets.",
  },
  {
    name: "Oliver",
    ageInMonths: 4,
    sex: "male",
    desc: "Mischievous and fun puppy, brings lots of joy to the home.",
  },
  {
    name: "Sadie",
    ageInMonths: 72,
    sex: "female",
    desc: "Serene and affectionate dog, perfect companion for all ages.",
  },
];

export const dogSlides = await Promise.all(
  dogs.map(async (dog) => {
    const img = (
      await import(`../assets/images/dogs/${dog.name.toLowerCase()}.webp`)
    ).default;

    return {
      ...dog,
      img,
      alt: `${dog.name}, ${getAgeAltText(dog.ageInMonths)} ${dog.sex} dog`,
    };
  }),
);
