import "../scss/main.scss";
import "virtual:svg-icons-register";

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { optionsData } from "./data/selectOptions.js";
import { phoneMasks } from "./data/phoneMasks.js";

import { initPreloader } from "./components/preloader.js";
import { initBurger } from "./components/burger.js";
import { initModal } from "./components/modalManager.js";
import { initFocusManager } from "./services/focusManager.js";
import { initTabs } from "./components/tabs.js";
import { initGallery } from "./services/renderGallery.js";
import { initCookieBanner } from "./components/cookieBanner.js";
import { initCustomSelect } from "./components/customSelect.js";
import { initFormHandler } from "./forms/formHandler.js";
import { initMaps } from "./services/lazyMapLoader.js";
import { initLightbox } from "./services/lightbox.js";
import { initDatePicker } from "./components/dataPicker.js";
import { initCurrentYear } from "./helpers/currentYear.js";
import { initSyncDataAttrWithText } from "./helpers/syncDataAttrWithText.js";
import { initLongTextWatcher } from "./helpers/longTextWatcher.js";
import { initFirstScreenAnimation } from "./animations/firstScreenAnimation.js";
import { initFeaturesAnimation } from "./animations/featuresAnimation.js";
import { initPricesAnimation } from "./animations/pricesAnimation.js";
import { initGalleryAnimation } from "./animations/galleryAnimation.js";
import { initLocationAnimation } from "./animations/locationAnimation.js";
import { initContactsAnimation } from "./animations/contactsAnimation.js";
import { initFooterAnimation } from "./animations/footerAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initBurger("#burger", ".header__info");
  initModal();
  initFocusManager();
  initTabs("#gallery-tabs");
  initGallery();
  initCookieBanner();
  initCustomSelect("#services", optionsData.services);
  initFormHandler("#contacts-form");
  initMaps();
  initLightbox();
  initCurrentYear();
  initDatePicker();
  initSyncDataAttrWithText(".header__social-link", "text");
  initSyncDataAttrWithText(".main-title__word", "text");
  initSyncDataAttrWithText(".footer__author", "text");
  initLongTextWatcher(".main-title__word");
  initFirstScreenAnimation();
  initFeaturesAnimation();
  initPricesAnimation();
  initGalleryAnimation();
  initLocationAnimation();
  initContactsAnimation();
  initFooterAnimation();
});
