"use strict";

const counter = document.querySelector(".click_counter");
const buttonsContainer = document.querySelector(".buttons");
let prevButton;

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerText = "Нажми меня!";
  button.setAttribute("id", `button-${i}`);
  buttonsContainer.append(button);
}

buttonsContainer.addEventListener("click", function (e) {
  const currentButton = e.target;

  if (currentButton.className !== "button") {
    return;
  }

  counter.innerText = Number(counter.innerText) + 1;
  currentButton.innerText = "Нажата!";

  if (prevButton && !prevButton.isEqualNode(currentButton)) {
    prevButton.innerText = "Нажми меня!";
  }

  prevButton = currentButton;
});
