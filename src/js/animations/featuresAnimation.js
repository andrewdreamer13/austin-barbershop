import { gsap } from "gsap";

export const initFeaturesAnimation = () => {
  const featuresSection = document.querySelector(".features");
  if (!featuresSection) return;

  const createObserver = (callback, options = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: "0px 0px -15% 0px", 
      threshold: 0.1,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target); 
        }
      });
    }, defaultOptions);

    return observer;
  };

  const overlayObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        gsap.to(featuresSection, {
          "--overlay-opacity": entry.isIntersecting ? 0 : 1,
          duration: 1.5,
          ease: "power2.in",
        });
      });
    },
    { threshold: 0.2 },
  );
  overlayObserver.observe(featuresSection);

 
  const contentObserver = createObserver((target) => {
    if (target.classList.contains("title__text")) {
      gsap.fromTo(
        target,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      );
    }

    if (target.classList.contains("features__title")) {
      gsap.to(target, {
        "--after-y": "0px",
        "--after-opacity": 1,
        duration: 1.2,
        ease: "power3.out",
      });
    }

    if (target.classList.contains("features__description")) {
      gsap.fromTo(
        target,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      );
    }
  });

 
  const titleTexts = featuresSection.querySelectorAll(".title__text");
  titleTexts.forEach((text) => contentObserver.observe(text));

  const title = featuresSection.querySelector(".features__title");
  if (title) contentObserver.observe(title);

  const description = featuresSection.querySelector(".features__description");
  if (description) contentObserver.observe(description);

  
  const cardsObserver = createObserver((card) => {
    const iconBox = card.querySelector(".features__icon-box");
    const cardTitleTexts = card.querySelectorAll(".features__card-title-text");

    if (iconBox) {
      gsap.fromTo(
        iconBox,
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
      );
    }

    if (cardTitleTexts.length) {
      gsap.fromTo(
        cardTitleTexts,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.3, ease: "power3.out" },
      );
    }
  });

  const cards = featuresSection.querySelectorAll(".features__card");
  cards.forEach((card) => cardsObserver.observe(card));
};

