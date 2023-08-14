//Add a row that says that Mel has been removed form the list

const listItems = document.querySelectorAll(".item");

listItems.forEach((el) => {
  if (el.textContent === "Mel") {
    el.textContent = "Mel has been removed from the list";
  }
});
