const baseUrl = import.meta.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

const getMediaUrl = (media: any) => {
  if (!media) return null;
  if (media.url) {
    return media.url.startsWith("http") ? media.url : `${baseUrl}${media.url}`;
  }

  const url = media.data?.[0].attributes.url || media.data.attributes.url;
  return url ? (url.startsWith("http") ? url : `${baseUrl}${url}`) : null;
};

export type DogArticle = {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string;
  ageInMonths: number;
  sex: "male" | "female";
  order: number;
  isActive: boolean;
};

export const getDogArticles = async (): Promise<DogArticle[]> => {
  const params = {
    "sort[0]": "order:asc",
    "sort[1]": "createdAt:desc",
    "filters[isActive][$eq]": "true",
    populate: "image",
  };
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${baseUrl}/api/dogs?${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const payload = await response.json();
    if (!response.ok || !payload.data) {
      console.error("Strapi error:", payload.error || payload);
      return [];
    }

    return payload.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description || null,
      imageUrl: getMediaUrl(item.image),
      ageInMonths: item.age_in_months,
      sex: item.sex,
      order: item.order,
      isActive: item.isActive !== false,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
