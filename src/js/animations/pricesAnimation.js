import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initPricesAnimation = () => {
  const pricesSection = document.querySelector(".prices");
  if (pricesSection) {
    gsap.to(pricesSection, {
      "--overlay-opacity": 0,
      duration: 1.5,
      ease: "power2.in",
      scrollTrigger: {
        trigger: pricesSection,
        start: "center bottom",
        toggleActions: "play none none none",
      },
    });
  }

  const title = pricesSection.querySelector(".prices__title");
  const titleTexts = title?.querySelectorAll(".title__text");

  if (title && titleTexts.length) {
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    titleTl

      .fromTo(
        titleTexts,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
      )

      .to(
        title,
        {
          "--after-y": "0px",
          "--after-opacity": 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );
  }

  const description = pricesSection.querySelector(".prices__description");
  if (description) {
    gsap.fromTo(
      description,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
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

  const listItems = pricesSection.querySelectorAll(".prices__list-item");
  listItems.forEach((item) => {
    const itemTitle = item.querySelector(".prices__list-title");
    const itemDescription = item.querySelector(".prices__list-description");
    const itemPrice = item.querySelector(".prices__list-price");

    const parts = [itemTitle, itemDescription, itemPrice].filter(Boolean);

    gsap.fromTo(
      parts,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.to(item, {
      "--border-color": "rgba(255, 255, 255, 0.3)",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });

  const buttons = pricesSection.querySelectorAll(".prices__buttons .button");
  if (buttons.length) {
    gsap.fromTo(
      buttons,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pricesSection.querySelector(".prices__buttons"),
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );
  }
};
