import gsap from "gsap";

export function initGalleryAnimation() {
  const gallerySection = document.querySelector(".gallery");
  if (!gallerySection) return;

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

 
  const overlayTween = gsap.to(gallerySection, {
    "--overlay-opacity": 0,
    duration: 1.5,
    ease: "power2.in",
    paused: true,
  });

  createObserver(gallerySection, () => overlayTween.play(), {
    rootMargin: "0px 0px -70% 0px",
  });

  
  const title = gallerySection.querySelector(".gallery__title");
  const titleTexts = title?.querySelectorAll(".title__text");
  const description = gallerySection.querySelector(".gallery__description");

  if (title && titleTexts?.length) {
    const headerTl = gsap.timeline({ paused: true });

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
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.2",
      );
    }

    createObserver(title, () => headerTl.play(), {
      rootMargin: "0px 0px -35% 0px",
    });
  }

  
  const tabsTrack = gallerySection.querySelector(".tabs__button-track");
  const tabButtons = gallerySection.querySelectorAll(".tabs__button");

  if (tabsTrack && tabButtons.length) {
    const tabsTl = gsap.fromTo(
      tabButtons,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        paused: true,
      },
    );

    createObserver(tabsTrack, () => tabsTl.play(), {
      rootMargin: "0px 0px -35% 0px",
    });
  }

 
  const activeContent = gallerySection.querySelector(
    ".tabs__panel--active .tabs__panel-content",
  );
  const activeBtn = gallerySection.querySelector(
    ".tabs__panel--active .tabs__more-button",
  );


  if (activeContent) {
    gsap.set(activeContent, { autoAlpha: 0, y: 30 });

    createObserver(
      activeContent,
      () => {
        gsap.to(activeContent, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
  }

  
  if (activeBtn) {
    gsap.set(activeBtn, { autoAlpha: 0, y: 20 });

    createObserver(
      activeBtn,
      () => {
        gsap.to(activeBtn, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      { rootMargin: "0px 0px -20% 0px" }, 
    );
  }
}
