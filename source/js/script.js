import { initHeader } from "./blocks/header.js";
import { initRangeSlider } from "./blocks/range-slider.js";
import { initLeaflet } from "./blocks/map.js";
import { initSwiper } from "./blocks/swiper.js";
import { initCatalogPagination } from "./blocks/pagination.js";

document.addEventListener("DOMContentLoaded", function() {
  initHeader();
  initRangeSlider();
  initLeaflet();
  initSwiper();
  initCatalogPagination();
});
