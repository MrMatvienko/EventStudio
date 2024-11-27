export function giftInit() {
  const giftBtn = document.querySelector(".gift-btn");
  const modal = document.querySelector(".order");
  if (giftBtn) {
    giftBtn.addEventListener("click", function () {
      document.body.style.overflow = "hidden";
      modal.classList.add("open-modal");
    });
  }
}
