import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initLocationAnimation() {
  const locationSection = document.querySelector(".location");
  if (!locationSection) return;

  gsap.to(locationSection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    scrollTrigger: {
      trigger: locationSection,
      start: "top 10%",
      toggleActions: "play none none reverse",
    },
  });

  const title = locationSection.querySelector(".location__title");
  const titleTexts = title?.querySelectorAll(".title__text");
  const description = locationSection.querySelector(".location__description");

  if (title && titleTexts?.length) {
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: locationSection,
        start: "top 40%",
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

  const mapWrapper = locationSection.querySelector(".location__map-wrapper");
  if (mapWrapper) {
    gsap.fromTo(
      mapWrapper,
      {
        autoAlpha: 0,
        scale: 0.9,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapWrapper,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }
}
