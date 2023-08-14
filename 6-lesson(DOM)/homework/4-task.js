//Remove Mel

const listItems = document.querySelectorAll(".item");

listItems.forEach((el) => {
  if (el.textContent === "Mel") {
    el.remove();
  }
});
