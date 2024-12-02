export function sendTest() {
  const sendBtn = document.querySelector(".test-btn");
  const testModal = document.querySelector(".help-test");
  const testForm = document.querySelector(".help-form");

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

      emailjs
        .send("service_zo5qi0m", "template_o9gerui", params)
        .then(function (res) {
          alert("Success! Status: " + res.status);
          testModal.classList.add("is-hidden");
          testForm.reset();
        })
        .catch(function (error) {
          alert("Failed to send email: " + error);
          testForm.reset();
        });
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      testModal.classList.add("is-hidden");
    });
  }
}
