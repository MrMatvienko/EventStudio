export function sendTest() {
  const sendBtn = document.querySelector(".test-btn");
  const testModal = document.querySelector(".help-test");
  const testForm = document.querySelector(".help-form");
  const succesModal = document.querySelector(".succes");
  const loader = document.querySelector(".loader");

  if (testForm) {
    testForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Збираємо дані з форми
      const params = {
        name: document.getElementById("form_name").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        post_type: testForm.querySelector(
          'select[name="select"]:nth-of-type(1)'
        ).value,
        post_number: document.getElementById("mail").value,
        payment: testForm.querySelector('select[name="select"]:nth-of-type(2)')
          .value,
        comment: testForm.querySelector(".help-fom-textarea").value,
      };

      // Блокуємо кнопку і показуємо loader
      sendBtn.disabled = true;
      loader.classList.add("open-modal");

      // Відправка через EmailJS
      emailjs
        .send("service_c3fimkf", "template_2i1mfr8", params)
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
