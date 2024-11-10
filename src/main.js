const burger = document.querySelector(".burger-menu");
const mobMenu = document.querySelector(".mobile-bar");
const menuLinks = document.querySelectorAll(".mobile-bar-item a");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  mobMenu.classList.toggle("is-hidden");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    burger.classList.toggle("active");
    mobMenu.classList.add("is-hidden");
  });
});

/*--------------Question--Button--Arrow-------------------*/
const arrowBtns = document.querySelectorAll(".question-icon");
const answers = document.querySelectorAll(".question-answer");

arrowBtns.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const questionItem = arrow.closest(".question-list-item");
    const answer = questionItem.querySelector(".question-answer");

    /*-----Closed all answer---------*/
    answers.forEach((item) => {
      if (item !== answer) {
        item.classList.remove("active");
        item.style.maxHeight = null;
        const arrowIcon = item
          .closest(".question-list-item")
          .querySelector(".question-icon");
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });

    answer.classList.toggle("active");

    if (answer.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
    } else {
      answer.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
    }
  });
});
