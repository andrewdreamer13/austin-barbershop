import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initPricesAnimation = () => {
  const pricesSection = document.querySelector(".prices");
  //  const pricesTitle = pricesSection.querySelector(".prices__title");
  if (pricesSection) {
    gsap.to(pricesSection, {
      "--overlay-opacity": 0,
      duration: 1.5,
      ease: "power2.in",
      scrollTrigger: {
        trigger: pricesSection,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
  }

  // 2 и 3. Заголовок и ::after в единой цепочке
  const title = pricesSection.querySelector(".prices__title");
  const titleTexts = title?.querySelectorAll(".title__text");

  if (title && titleTexts.length) {
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    titleTl
      // 1. По очереди выезжают строки текста
      .fromTo(
        titleTexts,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
      )
      // 2. Линия выезжает в самом конце (с перекрытием -=0.3s)
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
  // 4. Описание секции (.prices__description)
  const description = pricesSection.querySelector(".prices__description");
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
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  // 5. Элементы прайса (.prices__list-item)
  const listItems = pricesSection.querySelectorAll(".prices__list-item");
  listItems.forEach((item) => {
    const itemTitle = item.querySelector(".prices__list-title");
    const itemDescription = item.querySelector(".prices__list-description");
    const itemPrice = item.querySelector(".prices__list-price");

    const parts = [itemTitle, itemDescription, itemPrice].filter(Boolean);

    // Анимация выезда текста/цены
    gsap.fromTo(
      parts,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Плавное проявление нижней линии
    gsap.to(item, {
      "--border-color": "rgba(255, 255, 255, 0.3)",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // 6. Кнопки (.prices__buttons) — выходят по очереди
  const buttons = pricesSection.querySelectorAll(".prices__buttons .button");
  if (buttons.length) {
    gsap.fromTo(
      buttons,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18, // Сначала Get Directions, затем Book Your Experience
        ease: "power3.out",
        scrollTrigger: {
          trigger: pricesSection.querySelector(".prices__buttons"),
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }
};
