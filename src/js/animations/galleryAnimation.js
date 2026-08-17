import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGalleryAnimation() {
  const gallerySection = document.querySelector(".gallery");
  if (!gallerySection) return;

  gsap.to(gallerySection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    scrollTrigger: {
      trigger: gallerySection,
      start: "center bottom",
      toggleActions: "play none none reverse",
    },
  });

  const title = gallerySection.querySelector(".gallery__title");
  const titleTexts = title?.querySelectorAll(".title__text");
  const description = gallerySection.querySelector(".gallery__description");

  if (title && titleTexts.length) {
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    headerTl

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
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      );
    }
  }

  const tabsTrack = gallerySection.querySelector(".tabs__button-track");
  const tabButtons = gallerySection.querySelectorAll(".tabs__button");

  if (tabsTrack && tabButtons.length) {
    const tabsTl = gsap.timeline({
      scrollTrigger: {
        trigger: tabsTrack,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tabsTl.fromTo(
      tabButtons,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }

  const activePanelContent = gallerySection.querySelector(
    ".tabs__panel--active .tabs__panel-content",
  );

  if (activePanelContent) {
    gsap.fromTo(
      activePanelContent,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tabs__content",
          start: "center 60%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }

  const activeMoreButton = gallerySection.querySelector(
    ".tabs__panel--active .tabs__more-button",
  );

  if (activeMoreButton) {
    gsap.fromTo(
      activeMoreButton,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tabs__content",
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }
}
