//Add background color to each odd row

const listItems = document.querySelectorAll(".item");

listItems.forEach((item, index) => {
  if (index % 2 == 0) {
    item.style.backgroundColor = "red";
  }
});
