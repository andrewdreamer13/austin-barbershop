import gsap from "gsap";

export function initFooterAnimation() {
  const footerSection = document.querySelector(".footer");
  if (!footerSection) return;

  const copyright = footerSection.querySelector(".footer__copyright");
  const credits = footerSection.querySelector(".footer__credits");

  const elementsToAnimate = [copyright, credits].filter(Boolean);

  if (elementsToAnimate.length) {
    gsap.set(elementsToAnimate, { autoAlpha: 0, y: 20 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(elementsToAnimate, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -5% 0px" }, 
    );

    observer.observe(footerSection);
  }
}
