import gsap from "gsap";

export function initContactsAnimation() {
  const contactsSection = document.querySelector(".contacts");
  if (!contactsSection) return;

 
  const createObserver = (target, onEnter, options = {}) => {
    if (!target) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onEnter();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(target);
  };


  const overlayTween = gsap.to(contactsSection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    paused: true,
  });

  createObserver(contactsSection, () => overlayTween.play(), {
    rootMargin: "0px 0px -80% 0px",
  });

  
  const title = contactsSection.querySelector(".contacts__title");
  const titleTexts = title?.querySelectorAll(".title__text");
  const description = contactsSection.querySelector(".contacts__description");

  if (title && titleTexts?.length) {
    const headerTl = gsap.timeline({ paused: true });

    headerTl
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

    if (description) {
      headerTl.fromTo(
        description,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      );
    }

    createObserver(contactsSection, () => headerTl.play(), {
      rootMargin: "0px 0px -35% 0px",
    });
  }

 
  const cardsContainer = contactsSection.querySelector(".contacts__cards");
  const cards = cardsContainer?.querySelectorAll(".contacts__card");

  if (cardsContainer && cards?.length) {
    const cardsTl = gsap.timeline({ paused: true });

    cards.forEach((card, index) => {
      const iconBox = card.querySelector(".contacts__icon-box");
      const cardTitle = card.querySelector(".contacts__card-title");
      const cardInfo = card.querySelector(".contacts__card-info");

      const cardElements = [iconBox, cardTitle, cardInfo].filter(Boolean);

      if (cardElements.length) {
        cardsTl.fromTo(
          cardElements,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          },
          index === 0 ? 0 : "-=0.35",
        );
      }
    });

    createObserver(cardsContainer, () => cardsTl.play(), {
      rootMargin: "0px 0px -35% 0px",
    });
  }

  
  const contactsForm = contactsSection.querySelector(".contacts__form");
  if (contactsForm) {
    gsap.set(contactsForm, { opacity: 0, scale: 0.95, y: 30 });

    createObserver(
      contactsForm,
      () => {
        gsap.to(contactsForm, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      },
      { rootMargin: "0px 0px -25% 0px" },
    );
  }
}
