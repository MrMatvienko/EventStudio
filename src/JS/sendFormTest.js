export function sendTest() {
  const sendBtn = document.querySelector(".test-btn");
  const testModal = document.querySelector(".help-test");
  const testForm = document.querySelector(".help-form");

  if (testForm) {
    testForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const params = {
        from_name: document.getElementById("form_name").value,
        phone_number: document.getElementById("phone").value,
        telegram: document.getElementById("telegram").value,
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
