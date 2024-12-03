export function groupModal() {
  const modal = document.querySelector(".order");
  const groupform = document.querySelector(".form-wraper");
  const sendBtn = document.querySelector(".order-form-btn");
  const succesModal = document.querySelector(".succes");
  const loader = document.querySelector(".loader");

  if (modal) {
    groupform.addEventListener("submit", function (event) {
      event.preventDefault();

      const params = {
        group_name: document.getElementById("group-name-order").value,
        group_number: document.getElementById("group-tell-order").value,
        group_telegram: document.getElementById("group-nikname-order").value,
        group_data: document.getElementById("date-order").value,
        group_coment: document.getElementById("coment-order").value,
      };

      sendBtn.disabled = true;
      loader.classList.add("open-modal");
      emailjs
        .send("service_zo5qi0m", "template_1f35ezk", params)
        .then(function (res) {
          if (res.status === 200) {
            modal.classList.add("is-hidden");
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
