import gsap from "gsap";

export function initLocationAnimation() {
  const locationSection = document.querySelector(".location");
  if (!locationSection) return;

  
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

  
  const overlayTween = gsap.to(locationSection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    paused: true,
  });

  createObserver(locationSection, () => overlayTween.play(), {
    rootMargin: "0px 0px -80% 0px",
  });

 
  const title = locationSection.querySelector(".location__title");
  const titleTexts = title?.querySelectorAll(".title__text");
  const description = locationSection.querySelector(".location__description");

  if (title && titleTexts?.length) {
    const headerTl = gsap.timeline({ paused: true });

    headerTl
      .fromTo(
        titleTexts,
        { opacity: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
        opacity: 0.8,
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

    createObserver(locationSection, () => headerTl.play(), {
      rootMargin: "0px 0px -35% 0px",
    });
  }

 
  const mapWrapper = locationSection.querySelector(".location__map-wrapper");
  if (mapWrapper) {
    gsap.set(mapWrapper, { opacity: 0, scale: 0.95, y:20 });

    createObserver(
      mapWrapper,
      () => {
        gsap.to(mapWrapper, {
          opacity: 1,
          scale: 1,
          y:0,
          duration: 1,
          ease: "power3.out",
        });
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
  }
}
