import type { ImageMetadata } from "astro";

export type Slide = {
  img: ImageMetadata;
  alt: string;
};

export type DogSlide = Slide & {
  name: string;
  ageInMonths: number;
  sex: "male" | "female";
  desc: string;
};
