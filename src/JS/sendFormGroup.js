export function groupModal() {
  const modal = document.querySelector(".order");
  const groupform = document.querySelector(".form-wraper");
  const sendBtn = document.querySelector(".order-form-btn");
  const succesModal = document.querySelector(".succes");
  const loader = groupform.querySelector(".loader");

  if (modal) {
    groupform.addEventListener("submit", function (event) {
      event.preventDefault();

      const getSelectedServices = () => {
        const servicesContainer = document.querySelector(
          ".individual-part-two"
        );
        if (!servicesContainer) {
          // Якщо елемент не знайдений, повертаємо порожній масив
          return [];
        }
        const checkboxes = servicesContainer.querySelectorAll(
          'input[type="checkbox"]'
        );
        const selectedServices = [];
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            const label = checkbox.closest("label");
            if (label) {
              const serviceText = label.textContent.trim();
              selectedServices.push(serviceText);
            }
          }
        });

        return selectedServices;
      };

      const title = modal.querySelector(".order-title").textContent.trim();

      const groupTitle = modal.querySelector(".group");
      const individualTitle = modal.querySelector(".individual");

      let eventTitle = "";
      if (groupTitle && !groupTitle.classList.contains("disabled")) {
        eventTitle = groupTitle.textContent.trim();
      } else if (individualTitle) {
        eventTitle = individualTitle.textContent.trim();
      }

      const params = {
        event_title: eventTitle,
        group_name: groupform.querySelector('[data-input="name"]')?.value || "",
        group_number:
          groupform.querySelector('[data-input="tell"]')?.value || "",
        group_telegram:
          groupform.querySelector('[data-input="telegram"]')?.value || "",
        master_class: title,
        group_data: groupform.querySelector('[data-input="date"]')?.value || "",
        group_coment:
          groupform.querySelector('[data-input="comment"]')?.value || "",
        individual_quantity:
          groupform.querySelector('[data-input="quantity"]')?.value || "",
        individual_event:
          groupform.querySelector('[data-input="event"]')?.value || "",
        individual_services: getSelectedServices() || [],
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
