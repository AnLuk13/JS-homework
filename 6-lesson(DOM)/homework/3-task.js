//Add Smith, Jeff and Larry in the top, middle and end of the list

const list = document.querySelector(".list");

const listItems = document.querySelectorAll(".item");

const newLi = document.createElement("li");
newLi.textContent = "Smith";
newLi.className = "item";

const newLi2 = document.createElement("li");
newLi2.textContent = "Jeff";
newLi2.className = "item";

const newLi3 = document.createElement("li");
newLi3.textContent = "Larry";
newLi3.className = "item";

list.firstChild.before(newLi);
// list.prepend(newLi);
list.children[4].before(newLi2);
list.lastChild.after(newLi3);
// list.append(newLi3);
// list.insertAdjacentHTML("beforeend", '<li class="item"> Larry </li>');
