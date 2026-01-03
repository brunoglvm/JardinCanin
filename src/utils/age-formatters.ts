export const getAge = (ageInMonths: number) => {
  if (ageInMonths < 12) {
    return `${ageInMonths} mo`;
  }
  const years = Math.floor(ageInMonths / 12);
  return `${years} ${years === 1 ? "yr" : "yrs"}`;
};

export const getAgeAltText = (ageInMonths: number) => {
  if (ageInMonths < 12) {
    return `${ageInMonths}-month-old`;
  }

  const years = Math.floor(ageInMonths / 12);
  return `${years}-year-old`;
};
