export function individInit() {
  const openBtn = document.querySelector(".ind-btn-mod");
  const modal = document.querySelector(".order");
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      document.body.style.overflow = "hidden";
      modal.classList.add("open-modal");
    });
  }
}
