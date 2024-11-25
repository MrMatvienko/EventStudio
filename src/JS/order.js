const groupBtn = document.querySelector(".order-group-btn");
const individualBtn = document.querySelector(".order-individual-btn");
const groupForm = document.querySelector(".form-group");
const individualForm = document.querySelector(".form-individual");
// const titleCurent = document.querySelector(".");
// const closeBtn = document.querySelector(".order-form-close");
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
