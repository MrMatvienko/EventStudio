import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function initSwiper() {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 8,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
}
