export function modalInit() {
  const openBtn = document.querySelectorAll(".order-btn");
  const modal = document.querySelector(".order");
  const closeBtn = document.querySelector(".order-form-close");
  const modalTitle = document.querySelector(".order-title");
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

export function modalMasterInit() {
  const modal = document.querySelector(".order");
  const openMasterBtn = document.querySelectorAll(".master-gallery-btn");
  const modalTitle = document.querySelector(".order-title");
  const closeBtn = document.querySelector(".order-form-close");

  openMasterBtn.forEach((item) => {
    item.addEventListener("click", function () {
      const cartItem = item.closest(".master-list-item");
      const titleItem =
        cartItem.querySelector(".master-item-title").textContent;
      modalTitle.textContent = titleItem;
      document.body.style.overflow = "hidden";
      modal.classList.add("open-modal");
    });
  });
  closeBtn.addEventListener("click", function () {
    document.body.style.overflow = "";
    modal.classList.remove("open-modal");
  });
}
