export function orderInit() {
  const groupBtn = document.querySelector(".order-group-btn");
  const individualBtn = document.querySelector(".order-individual-btn");
  const individualFormOne = document.querySelector(".individual-part-one");
  const individualFormTwo = document.querySelector(".individual-part-two");

  if (individualBtn) {
    individualBtn.addEventListener("click", function () {
      groupBtn.classList.add("disabled");
      individualFormOne.classList.add("open-modal");
      individualFormTwo.classList.add("open-modal");
      individualBtn.classList.remove("disabled");
    });
    groupBtn.addEventListener("click", function () {
      groupBtn.classList.remove("disabled");
      individualFormOne.classList.remove("open-modal");
      individualFormTwo.classList.remove("open-modal");
      individualBtn.classList.add("disabled");
    });
  }
}
