import Lenis from "lenis";

const lenis = new Lenis({
  lerp: 0.12,
  anchors: {
    duration: 1.5,
  },
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
