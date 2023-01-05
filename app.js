let numberSelected = Math.floor(Math.random() * 20);
let input = document.querySelector("#input-number");
let btn = document.querySelector("#btn");
let text = document.querySelector("#result");

btn.addEventListener("click", () => {
  let numberGuessed = Number(input.value);
  if (numberGuessed > numberSelected) {
    text.innerHTML = "too big";
  } else if (numberGuessed < numberSelected) {
    text.innerHTML = "too short";
  } else {
    text.innerHTML = "you won!";
  }
});
