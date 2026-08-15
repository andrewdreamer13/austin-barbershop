import { gsap } from "gsap";

export const initFirstScreenAnimation = () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");
  const heroSubtitle = document.querySelector(".hero__subtitle");
  const titleWords = document.querySelectorAll(".main-title__word");
  const leftButton = document.querySelector(".hero__direction-button");
  const rightButton = document.querySelector(".hero__book-button");

  if (!hero || !header || !titleWords.length || !leftButton || !rightButton)
    return;

  const tl = gsap.timeline();

  tl.to(
    hero,
    {
      "--overlay-opacity": 0,
      duration: 2.0,
      ease: "power2.in",
    },
    0,
  )

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
