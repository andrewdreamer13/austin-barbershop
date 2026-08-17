import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initFeaturesAnimation = () => {
  const featuresSection = document.querySelector(".features");
  if (!featuresSection) return;
  gsap.to(featuresSection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    scrollTrigger: {
      trigger: featuresSection,
      start: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  const titleTexts = featuresSection.querySelectorAll(".title__text");
  titleTexts.forEach((text, index) => {
    gsap.fromTo(
      text,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  });

  const title = featuresSection.querySelector(".features__title");
  if (title) {
    gsap.to(title, {
      "--after-y": "0px",
      "--after-opacity": 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }

  const description = featuresSection.querySelector(".features__description");
  if (description) {
    gsap.fromTo(
      description,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: description,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  }

  const cards = featuresSection.querySelectorAll(".features__card");
  cards.forEach((card) => {
    const iconBox = card.querySelector(".features__icon-box");
    const cardTitleTexts = card.querySelectorAll(".features__card-title-text");

    if (iconBox) {
      gsap.fromTo(
        iconBox,
        { autoAlpha: 0, y: 25, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    if (cardTitleTexts.length) {
      gsap.fromTo(
        cardTitleTexts,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  });
};
