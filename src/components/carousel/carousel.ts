import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

type DotGroup = {
  start: number;
  end: number;
  targetSlide: number;
  targetSnap: number;
};

export const initEmblaCarousel = (root: HTMLElement) => {
  const embla = EmblaCarousel(
    root,
    {
      loop: false,
      align: "center",
      duration: 38,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const dotsContainer = root.querySelector("[data-embla-dots]");

  const maxDots = 4;
  let dotGroups: DotGroup[] = [];
  let totalSlides = 0;
  let totalSnaps = 0;

  const slideToSnap = (slideIndex: number) => {
    if (totalSnaps <= 1 || totalSlides <= 1) return 0;
    const ratio = slideIndex / (totalSlides - 1);
    return Math.round(ratio * (totalSnaps - 1));
  };

  const snapToSlide = (snapIndex: number) => {
    if (totalSnaps <= 1 || totalSlides <= 1) return 0;
    const ratio = snapIndex / (totalSnaps - 1);
    return Math.round(ratio * (totalSlides - 1));
  };

  const createDots = () => {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";
    dotGroups = [];

    totalSlides = embla.slideNodes().length;
    totalSnaps = embla.scrollSnapList().length;
    if (totalSlides <= maxDots) {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button");
        dot.classList.add("embla__dot");
        dot.setAttribute("type", "button");
        dot.setAttribute("aria-label", `Ir para slide ${i + 1}`);
        const targetSnap = slideToSnap(i);
        dot.addEventListener("click", () => embla.scrollTo(targetSnap));
        dotsContainer.appendChild(dot);
        dotGroups.push({
          start: i,
          end: i,
          targetSlide: i,
          targetSnap,
        });
      }
      return;
    }
    const slidesPerGroup = Math.ceil(totalSlides / maxDots);
    const dotCount = Math.ceil(totalSlides / slidesPerGroup);
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("button");
      dot.classList.add("embla__dot");
      dot.setAttribute("type", "button");
      const startSlide = Math.min(i * slidesPerGroup, totalSlides - 1);
      const endSlide = Math.min(
        startSlide + slidesPerGroup - 1,
        totalSlides - 1,
      );
      const labelSuffix =
        startSlide === endSlide
          ? `${startSlide + 1}`
          : `${startSlide + 1}-${endSlide + 1}`;
      const isLastDot = i === dotCount - 1;
      const targetSlide = isLastDot ? endSlide : startSlide;
      const targetSnap = slideToSnap(targetSlide);
      dot.setAttribute("aria-label", `Ir para slide ${labelSuffix}`);
      dot.addEventListener("click", () => embla.scrollTo(targetSnap));
      dotsContainer.appendChild(dot);
      dotGroups.push({
        start: startSlide,
        end: endSlide,
        targetSlide,
        targetSnap,
      });
    }
  };

  const updateDots = () => {
    if (!dotsContainer || !dotGroups.length) return;
    const selectedSnap = embla.selectedScrollSnap();
    const dots = Array.from(dotsContainer.children);

    if (totalSlides <= maxDots) {
      const approximateSlide = snapToSlide(selectedSnap);
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-selected", index === approximateSlide);
      });
      return;
    }
    const approximateSlide = snapToSlide(selectedSnap);
    const activeGroup = dotGroups.findIndex(({ start, end }) => {
      return approximateSlide >= start && approximateSlide <= end;
    });
    const clampedActiveGroup =
      activeGroup === -1 ? dotGroups.length - 1 : activeGroup;
    dots.forEach((dot, index) => {
      dot.classList.toggle("is-selected", index === clampedActiveGroup);
    });
  };

  embla.on("select", updateDots);
  embla.on("reInit", () => {
    createDots();
    updateDots();
  });
  createDots();
  updateDots();

  return embla;
};
