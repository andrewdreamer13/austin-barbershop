import { galleryData } from "../data/galleryData.js";


export const initGallery = () => {
  const panels = document.querySelectorAll(".tabs__panel");

  const tabButtons = document.querySelectorAll(".tabs__button, [role='tab']");

  if (!panels.length || !galleryData) return;

  const loadedState = Object.keys(galleryData).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  const resetPanel = (panel) => {
    const category = panel.id;

    if (loadedState[category] > 6) {
      const container = panel.querySelector(".tabs__panel-content");
      if (!container) return;

      container.innerHTML = "";
      loadedState[category] = 0;
      renderImages(category, panel, 6);
    }
  };

  const renderImages = (category, panel, count) => {
    const data = galleryData[category];
    if (!data) return;

    const container = panel.querySelector(".tabs__panel-content");
    const moreBtn = panel.querySelector(".tabs__more-button");
    if (!container) return;

    const currentLoaded = loadedState[category];
    const itemsToLoad = data.slice(currentLoaded, currentLoaded + count);

    const fragment = document.createDocumentFragment();

    itemsToLoad.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "tabs__panel-item";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "button");
      wrapper.setAttribute("aria-label", "Open image");

      wrapper.innerHTML = `<img class="tabs__panel-img" src="${item.src}" alt="${item.alt}" loading="lazy">`;
      fragment.appendChild(wrapper);
    });

    container.appendChild(fragment);
    loadedState[category] += itemsToLoad.length;

    if (moreBtn) {
      const btnSpan = moreBtn.querySelector("span");

      if (loadedState[category] >= data.length) {
        if (btnSpan) btnSpan.textContent = "show less";
        moreBtn.dataset.state = "collapse";
      } else {
        if (btnSpan) btnSpan.textContent = "more photos";
        moreBtn.dataset.state = "expand";
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const panel = entry.target;
          const category = panel.id;

          if (loadedState[category] === 0) {
            renderImages(category, panel, 6);
            obs.unobserve(panel);
          }
        }
      });
    },
    { rootMargin: "100px" },
  );

  panels.forEach((panel) => {
    const category = panel.id;
    const moreBtn = panel.querySelector(".tabs__more-button");

    observer.observe(panel);

    if (moreBtn) {
      moreBtn.addEventListener("click", () => {
        if (moreBtn.dataset.state === "collapse") {
          resetPanel(panel);
          panel.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          renderImages(category, panel, 3);
        }
      });
    }
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(() => {
        panels.forEach((panel) => {
          const isHidden =
            panel.hidden ||
            panel.getAttribute("aria-hidden") === "true" ||
            (panel.classList.contains("tabs__panel") &&
              !panel.classList.contains("tabs__panel--active") &&
              !panel.classList.contains("active"));

          if (isHidden) {
            resetPanel(panel);
          }
        });
      }, 0);
    });
  });
};
