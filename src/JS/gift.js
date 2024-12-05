const giftBtn = document.querySelector(".gift-btn");
const modal = document.querySelector('.order[data-page="gift"]');
const groupform = document.querySelector(".form-wraper");
const sendBtn = document.querySelector(".order-form-btn");
const succesModal = document.querySelector(".succes");
const loader = groupform.querySelector(".loader");
const closeOrder = modal.querySelector(".order-form-close");
const closeModdal = succesModal.querySelector(".icon-close");

if (giftBtn) {
  giftBtn.addEventListener("click", function () {
    document.body.style.overflow = "hidden";
    modal.classList.add("open-modal");
  });
}
if (succesModal) {
  closeModdal.addEventListener("click", function () {
    succesModal.classList.remove("open-modal");
  });
}

if (closeOrder) {
  closeOrder.addEventListener("click", function () {
    document.body.style.overflow = "";
    modal.classList.remove("open-modal");
  });
}

if (modal) {
  groupform.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = modal.querySelector(".order-title").textContent.trim();
    const selectElement = document.querySelector(".form-select");
    const selectedValue = selectElement.value;

    const params = {
      event_title: title,
      group_name: groupform.querySelector('[data-input="name"]')?.value || "",
      group_number: groupform.querySelector('[data-input="tell"]')?.value || "",
      group_telegram:
        groupform.querySelector('[data-input="telegram"]')?.value || "",
      from_name:
        groupform.querySelector('[data-input="from_name"]')?.value || "",
      master_class: selectedValue,
      group_coment:
        groupform.querySelector('[data-input="comment"]')?.value || "",
    };

    sendBtn.disabled = true;
    loader.classList.add("open-modal");
    emailjs
      .send("service_zo5qi0m", "template_1f35ezk", params)
      .then(function (res) {
        if (res.status === 200) {
          modal.classList.remove("open-modal");
          succesModal.classList.add("open-modal");
          groupform.reset();
        }
      })
      .catch(function (error) {
        alert("Failed to send email: " + error);
      })
      .finally(() => {
        setTimeout(() => {
          loader.classList.remove("open-modal");
          sendBtn.disabled = false;
          document.body.style.overflow = "";
        }, 3000);
      });
  });
}
