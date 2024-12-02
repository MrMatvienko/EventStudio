export function sendTest() {
  const sendBtn = document.querySelector(".test-btn");
  const testModal = document.querySelector(".help-test");
  const testForm = document.querySelector(".help-form");
  const succesModal = document.querySelector(".succes");
  const loader = document.querySelector(".loader");

  if (testForm) {
    testForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const questions = {};
      const fieldsets = document.querySelectorAll("fieldset");
      fieldsets.forEach((fieldset, index) => {
        const questionNumber = `question-${index + 1}`;
        const checkboxes = fieldset.querySelectorAll(
          `input[name="${questionNumber}"]:checked`
        );
        questions[questionNumber] = Array.from(checkboxes)
          .map((checkbox) => checkbox.nextElementSibling.textContent.trim())
          .join(", ");
      });

      const params = {
        from_name: document.getElementById("form_name").value,
        phone_number: document.getElementById("phone").value,
        telegram: document.getElementById("telegram").value,
        ...questions,
      };

      sendBtn.disabled = true;
      loader.classList.add("open-modal");

      emailjs
        .send("service_zo5qi0m", "template_o9gerui", params)
        .then(function (res) {
          if (res.status === 200) {
            testModal.classList.add("is-hidden");
            succesModal.classList.add("open-modal");
            testForm.reset();
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
