import { gsap } from "gsap";

export const initFirstScreenAnimation = () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");
  const heroSubtitle = document.querySelector(".hero__subtitle");
  const titleWords = document.querySelectorAll(".main-title__word"); // [0] - austin, [1] - barbershop
  const leftButton = document.querySelector(".hero__direction-button");
  const rightButton = document.querySelector(".hero__book-button");

  if (!hero || !header || !titleWords.length || !leftButton || !rightButton)
    return;

  const tl = gsap.timeline();

  tl
    // 1. Фон: медленный старт с ускорением осветления к финалу
    .to(
      hero,
      {
        "--overlay-opacity": 0,
        duration: 2.0,
        ease: "power2.in",
      },
      0,
    )

    // 2. Шапка параллельно проявляется мягким фоном
    .fromTo(
      header,
      { autoAlpha: 0, y: -20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.8,
        ease: "power3.out",
      },
      0.1,
    )

    // 3. Левая кнопка (Get Directions) — опускается сверху
    .fromTo(
      leftButton,
      { autoAlpha: 0, y: -30, scale: 0.97 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power4.out",
      },
      0.2,
    )

    // 4. Правая кнопка (Book Your Experience) — опускается сверху
    .fromTo(
      rightButton,
      { autoAlpha: 0, y: -30, scale: 0.97 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: "power4.out",
      },
      0.38,
    )

    // 5. Subtitle — опускается сверху
    .fromTo(
      heroSubtitle,
      { autoAlpha: 0, y: -30, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power4.out",
      },
      0.55,
    )

    // 6. Нижнее слово заголовка ("barbershop") — опускается сверху
    .fromTo(
      titleWords[1],
      { autoAlpha: 0, y: -30, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      0.72,
    )

    // 7. Верхнее слово заголовка ("austin") — опускается сверху
    .fromTo(
      titleWords[0],
      { autoAlpha: 0, y: -30, scale: 0.96 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      },
      0.9,
    );
};

