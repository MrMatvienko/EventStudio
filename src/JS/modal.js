const openBtn = document.querySelectorAll(".event-btn");
const modal = document.querySelector(".order");
const closeBtn = document.querySelector(".order-form-close");
const modalTitle = document.querySelector(".order-title");

export function modalInit() {
  openBtn.forEach((item) => {
    item.addEventListener("click", function () {
      const card = item.closest(".event-list-item");
      const title = card.querySelector(".event-item-title").textContent;
      modalTitle.textContent = title;
      document.body.style.overflow = "hidden";
      modal.classList.add("open-modal");
    });
  });
  closeBtn.addEventListener("click", function () {
    document.body.style.overflow = "";
    modal.classList.remove("open-modal");
  });
}
