//Create a song list generator; User should be able to input song name, artist and runtime.
//Also should be able to delete song from list and see runtime in details below song name and
//artist when clicking on the row. See example below:

const form = document.getElementById("form");
const list = document.getElementById("list");
const name = document.getElementById("name");
const artist = document.getElementById("artist");
const runtime = document.getElementById("runtime");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("flex");
  const p = document.createElement("p");
  p.textContent = name.value;
  const span = document.createElement("span");
  span.textContent = `by ${artist.value}`;

  const button = document.createElement("button");
  button.classList.add("delete");

  const img = document.createElement("img");
  img.src = "/8-lesson(Events)/homework/trash-solid.svg";
  img.alt = "Delete";

  button.appendChild(img);

  div.appendChild(p);
  div.appendChild(span);
  li.appendChild(div);
  li.appendChild(button);
  ul.appendChild(li);

  list.appendChild(ul);

  name.value = "";
  artist.value = "";
  runtime.value = "";
});

list.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "IMG" || target.classList.contains("delete")) {
    target.closest("ul").remove();
  }
});
