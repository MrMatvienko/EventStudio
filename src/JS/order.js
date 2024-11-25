const groupBtn = document.querySelector(".order-group-btn");
const individualBtn = document.querySelector(".order-individual-btn");
const groupForm = document.querySelector(".form-group");
const individualForm = document.querySelector(".form-individual");
// const titleCurent = document.querySelector(".");
export function orderInit() {
  individualBtn.addEventListener("click", function () {
    groupForm.classList.add("is-hidden");
    groupBtn.classList.add("disabled");
    individualForm.classList.add("open-modal");
    individualBtn.classList.remove("disabled");
  });
  groupBtn.addEventListener("click", function () {
    groupForm.classList.remove("is-hidden");
    groupBtn.classList.remove("disabled");
    individualForm.classList.remove("open-modal");
    individualBtn.classList.add("disabled");
  });
}
const openBtn = document.querySelectorAll(".event-btn");
const modal = document.querySelector(".order");
const closeBtn = document.querySelector(".order-form-close");
// const cardId = document.getElementById(".");

openBtn.forEach((item) => {
  item.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    modal.classList.add("open-modal");
  });
});
closeBtn.addEventListener("click", function () {
  document.body.style.overflow = "";
  modal.classList.remove("open-modal");
});
