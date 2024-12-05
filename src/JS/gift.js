export function giftInit() {
  const openBtn = document.querySelector(".gift-btn");
  const modal = document.querySelector(".order");
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      document.body.style.overflow = "hidden";
      modal.classList.add("open-modal");
    });
  }
}
