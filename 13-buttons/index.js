"use-strict";

const counter = document.querySelector(".click_counter");
const buttonsContainer = document.querySelector(".buttons");
let prevButton;

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = "Нажми меня!";
  button.setAttribute("id", `button-${i}`);
  buttonsContainer.append(button);
}

buttonsContainer.addEventListener("click", function (e) {
  const currentButton = e.target;

  if (currentButton.className !== "button") {
    return;
  }

  counter.innerHTML = Number(counter.innerHTML) + 1;
  currentButton.innerHTML = "Нажата!";

  console.log(currentButton);
  console.log(prevButton);

  if (prevButton && !prevButton.isEqualNode(currentButton)) {
    prevButton.innerHTML = "Нажми меня!";
  }

  prevButton = currentButton;
});
