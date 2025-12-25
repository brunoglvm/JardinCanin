import type { DogSlide } from "../types/slide";

type DogSource = Omit<DogSlide, "alt" | "img">;

const dogs: DogSource[] = [
  {
    name: "Tyler",
    age: 3,
    sex: "male",
  },
  {
    name: "Toby",
    age: 5,
    sex: "male",
  },
  {
    name: "Maggie",
    age: 1,
    sex: "female",
  },
  {
    name: "Charlie",
    age: 4,
    sex: "male",
  },
  {
    name: "Mike",
    age: 2,
    sex: "male",
  },
  {
    name: "Bella",
    age: 1,
    sex: "female",
  },
  {
    name: "Rocky",
    age: 3,
    sex: "female",
  },
  {
    name: "Luna",
    age: 3,
    sex: "female",
  },
  {
    name: "Daisy",
    age: 1,
    sex: "male",
  },
  {
    name: "Molly",
    age: 2,
    sex: "female",
  },
  {
    name: "Lilly",
    age: 6,
    sex: "female",
  },
  {
    name: "Lucy",
    age: 5,
    sex: "female",
  },
  {
    name: "Oliver",
    age: 1,
    sex: "male",
  },
  {
    name: "Sadie",
    age: 6,
    sex: "female",
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
      alt: `${dog.name}, ${dog.age} ${dog.age === 1 ? "year" : "years"} old ${dog.sex} dog`,
    };
  }),
);
