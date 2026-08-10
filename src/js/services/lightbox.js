import { openModal } from "../components/modalManager.js";

export const initLightbox = () => {
  const lightboxModal = document.getElementById("modal-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryTabs = document.getElementById("gallery-tabs");

  if (!lightboxModal || !lightboxImg || !galleryTabs) return;

  const handleImageOpen = (targetItem) => {
    const img = targetItem.querySelector(".tabs__panel-img");
    if (!img) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";

    openModal(lightboxModal);
  };

  galleryTabs.addEventListener("click", (e) => {
    const item = e.target.closest(".tabs__panel-item");
    if (item) handleImageOpen(item);
  });

  galleryTabs.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const item = e.target.closest(".tabs__panel-item");
      if (item) {
        e.preventDefault();
        handleImageOpen(item);
      }
    }
  });
};
