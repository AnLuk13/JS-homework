//Create a simple to-do list page using jQuery.
//Allow users to add and remove tasks. Each task should have a
//checkbox to mark it as complete. Change style of row when task is marked as complete

const form = $("#form");
const list = $("#list");
const name = $("#name");
const desc = $("#desc");

form.submit((e) => {
  e.preventDefault();

  const li = $("<li>");
  const div = $("<div>").addClass("column");
  const div2 = $("<div>").addClass("flex");
  const title = $("<p>").text(name.val());
  const descr = $("<span>").text(desc.val());
  const button = $("<button>").addClass("delete").text("Delete");
  const checkbox = $("<input>").attr("type", "checkbox");
  checkbox.change((e) => {
    const target = $(e.target);

    if (target.prop("checked")) {
      target.closest(li).addClass("highlight");
    } else {
      target.closest(li).removeClass("highlight");
    }
  });

  div.append(title);
  div.append(descr);
  li.append(div);
  div2.append(button);
  div2.append(checkbox);
  li.append(div2);
  list.append(li);

  name.val("");
  desc.val("");
});

list.click((e) => {
  const target = $(e.target);
  if (target.hasClass("delete")) {
    target.closest("li").remove();
  }
});
