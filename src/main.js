import { initDetails } from "./JS/details";
import { initSwiper } from "./JS/swiper";
import { orderInit } from "./JS/order";
import { modalInit } from "./JS/modal";
import { modalMasterInit } from "./JS/modal";
import { giftInit } from "./JS/gift";
import { individInit } from "./JS/individual";
import { sendTest } from "./JS/sendFormTest";
import { groupModal } from "./JS/sendFormGroup";

document.addEventListener("DOMContentLoaded", () => {
  groupModal();
  sendTest();
  individInit();
  giftInit();
  modalMasterInit();
  modalInit();
  orderInit();
  initSwiper();
  initDetails();
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    header.style.backgroundColor = "rgba(240, 238, 238, 0.9)";
  } else {
    header.style.backgroundColor = "rgba(240, 238, 238, 0.61)";
  }
});
/*------------Burger---BTN------------------*/
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

/*-------------Arrow--SELECTION---------------*/
document.querySelectorAll(".selection-icon").forEach((icon) =>
  icon.addEventListener("click", () => {
    const sublist = icon
      .closest(".selection-list-item")
      ?.querySelector(".selection-sublist");
    sublist?.classList.toggle("active");
    icon.classList.toggle("active");
  })
);

/*------------------TEST-TOGGLE-BUTTON------------------- */

const openTest = document.querySelector(".help-btn");
const testModal = document.querySelector(".help-test");
const closeTest = document.querySelector(".test-close-btn");
if (openTest) {
  openTest.addEventListener("click", function () {
    testModal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  });
  closeTest.addEventListener("click", function () {
    testModal.classList.add("is-hidden");
    document.body.style.overflow = "";
  });
}

/*-----------------close-modal-succes--------------------- */
const succesModal = document.querySelector(".succes");
const modalWraper = succesModal.querySelector(".succes-modal");
const closeModdal = modalWraper.querySelector(".icon-close");
if (succesModal) {
  closeModdal.addEventListener("click", function () {
    succesModal.classList.remove("open-modal");
  });
}
