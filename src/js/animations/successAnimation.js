import { gsap } from "gsap";

export const initSuccessOpenAnimation = (modalElement) => {
  if (!modalElement) return;

  const content = modalElement.querySelector(".modal__content");
  if (!content) return;

  const tl = gsap.timeline();

  tl.fromTo(
    modalElement,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
  );

  tl.fromTo(
    content,
    {
      autoAlpha: 0,
      scale: 0.85,
    },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.5)",
      clearProps: "transform",
    },
    "-=0.1",
  );
};

export const initSuccessCloseAnimation = (modalElement, onComplete) => {
  if (!modalElement) return;

  const content =
    modalElement.querySelector(".modal__content") ||
    modalElement.querySelector(".success-modal");

  const tl = gsap.timeline({
    onComplete: () => {
      if (content) gsap.set(content, { clearProps: "all" });
      gsap.set(modalElement, { clearProps: "all" });

      if (onComplete) onComplete();
    },
  });

  if (content) {
    tl.to(content, {
      autoAlpha: 0,
      scale: 0.85,
      duration: 0.5,
      ease: "power2.in",
    });
  }

  tl.to(
    modalElement,
    {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.in",
    },
    "-=0.1",
  );
};
