const list = document.querySelector("ul");
const form = document.querySelector("form");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      resolve(response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

// function getList() {
sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
  (resp) => {
    for (const item of resp) {
      const listItem = document.createElement("li");
      listItem.id = item.id;
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `<span>${listItem.id}. ${item.title}</span><button class="btn btn-danger">Delete</button>`;
      list.appendChild(listItem);
    }
  }
);
// }

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
    //getList()
  });
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    const id = e.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((resp) => {
      // getList();
    });
    e.target.closest("li").remove();
  }
});
