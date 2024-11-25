import details from "../../details.json" assert { type: "json" };
import sprite from "../image/sprite.svg";

export function initDetails() {
  const dateilsBtn = document.querySelectorAll(".details-event-modal");
  const datailsModal = document.querySelector(".modal-dateils");

  dateilsBtn.forEach((item) => {
    item.addEventListener("click", handleItemClick);
  });

  function handleItemClick(event) {
    const itemId = event.currentTarget.getAttribute("data-id");
    const detailsData = details.find((detail) => detail.id === itemId);

    if (detailsData) {
      createModal(detailsData);
    } else {
      alert("Not found");
    }
  }

  function createModal({ title, duration, price, description, skills }) {
    document.body.style.overflow = "hidden";
    datailsModal.innerHTML = `
  <div class="modal-wrpaer">
  <svg class="icon-close"> 
  <use href=${sprite + "#icon-close"}></use> 
  </svg> 
  <h2>${title}</h2>
  <div class="details-container">
  <div class="details-info">
  <svg> 
  <use href=${sprite + "#icon-clock"}></use> 
  </svg> 
  <p>Тривалість: ${duration}год </p>
  </div>
  <div class="details-info">
  <svg> 
  <use href=${sprite + "#icon-hand"} ></use> 
  </svg> 
  <p>Вартість: ${price}грн </p>
  </div>
  </div>
  <div class="details-description"></div>
  <div class="details-skills-container"> 
  <h3>Разом з “Квітни”:</h3>
  <div class="details-skills"></div>
  </div>
  <button type="button" class="order-btn detail-btn">Записатись</button>
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

    const skillsContainer = datailsModal.querySelector(".details-skills");
    const skillsHTML = Object.values(skills)
      .filter((skill) => skill.trim())
      .map(
        (skill) => `
  <div class="skills-list">
  <svg>
  <use href=${sprite + "#icon-lotus"} ></use>
  </svg>
  <p>${skill} </p>
  </div>`
      )
      .join("");

    skillsContainer.innerHTML = skillsHTML;

    datailsModal.classList.add("open-modal");

    const closeBtn = document.querySelector(".icon-close");
    closeBtn.addEventListener("click", closeModal);
  }

  function closeModal() {
    document.body.style.overflow = "";
    datailsModal.classList.remove("open-modal");
  }
}
