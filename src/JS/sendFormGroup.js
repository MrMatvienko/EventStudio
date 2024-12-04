export function groupModal() {
  const modal = document.querySelector(".order");
  const groupform = document.querySelector(".form-wraper");
  const sendBtn = document.querySelector(".order-form-btn");
  const succesModal = document.querySelector(".succes");
  const loader = document.querySelector(".loader");

  if (modal) {
    groupform.addEventListener("submit", function (event) {
      event.preventDefault();

      const title = modal.querySelector(".order-title").textContent.trim();

      const params = {
        group_name: groupform.querySelector('[data-input="name"]').value || "",
        group_number:
          groupform.querySelector('[data-input="tell"]').value || "",
        group_telegram:
          groupform.querySelector('[data-input="telegram"]').value || "",
        master_class: title,
        group_data: groupform.querySelector('[data-input="date"]').value || "",
        group_coment:
          groupform.querySelector('[data-input="comment"]').value || "",
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
}
