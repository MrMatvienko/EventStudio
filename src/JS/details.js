import details from "../../details.json" assert { type: "json" };

const dateilsBtn = document.querySelectorAll(".details-event-modal");
const datailsModal = document.querySelector(".modal-dateils");

dateilsBtn.forEach((item) => {
  item.addEventListener("click", handleItemClick);
});

function handleItemClick(event) {
  const itemId = event.currentTarget.getAttribute("data-id");
  const detailsData = details.find((detail) => detail.id === itemId);
  console.log(detailsData.description);
  if (detailsData) {
    createModal(detailsData);
  } else {
    alert("Not found");
  }
}

function createModal({ title, duration, price, description }) {
  document.body.style.overflow = "hidden";
  datailsModal.innerHTML = `
  <div class="modal-wrpaer">
  <h2>${title}</h2>
  <div class="details-container">
  <div class="details-info">
  <svg> 
  <use></use> 
  </svg> 
  <p>Тривадість: ${duration} год </p>
  </div>
  <div class="details-info">
  <svg> 
  <use></use> 
  </svg> 
  <p>Тривадість: ${price} грн </p>
  </div>
  </div>
  <div class="details-description"></div>
  <div class="details-skills-container"> 
  <h3>Разом з “Квітни”:<h3>
  <div class="details-skills"></div>
  </div>
  </div>
  `;

  const descriptionContainer = datailsModal.querySelector(
    ".details-description"
  );
  const descriptionHTML = Object.values(description)
    .filter((descText) => descText.trim())
    .map((descText) => `<p>${descText}</p>`)
    .join("");
  descriptionContainer.innerHTML = descriptionHTML;

  datailsModal.classList.add("open-modal");
}
