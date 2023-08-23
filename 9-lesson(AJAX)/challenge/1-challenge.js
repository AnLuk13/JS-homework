//Rewrite the Promises code we did in class with fetch API

const list = document.querySelector("ul");
const form = document.querySelector("form");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.currentTarget.querySelector("#title").value;
  const description = e.currentTarget.querySelector("#desc").value;

  const body = {
    title: title,
    body: description,
    userId: 1,
  };

  sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    body
  ).then((resp) => {
    const listItem = document.createElement("li");
    listItem.id = resp.id;
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `<span>${listItem.id}. ${description}</span><button class="btn btn-danger">Delete</button>`;
    list.appendChild(listItem);
  });
});

const data = {
  title: "a",
  desc: "b",
  userId: 3,
};

sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((resp) => {
    for (const item of resp) {
      const listItem = document.createElement("li");
      listItem.id = item.id;
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `<span>${item.id}. ${item.title}</span><button class="btn btn-danger">Delete</button>`;
      list.appendChild(listItem);
    }
  })
  .then(
    sendHttpRequest(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      data
    ).then((resp) => {
      const listItem = document.createElement("li");
      listItem.id = resp.id;
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `<span>${listItem.id}. ${data.desc}</span><button class="btn btn-danger">Delete</button>`;
      list.appendChild(listItem);
    })
  );
