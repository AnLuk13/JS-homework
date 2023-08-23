//Create an html-page for displaying and editing text.
//When opening the page, the text should be displayed with div tag.
//When clicking Ctrl+E, textarea appears instead of div and can be edited.
//When pressing Ctrl+S, the div with edited text appears instead of textarea.
//Don’t forget to turn off default settings for these hotkey combinations.

const textArea = document.getElementById("text");
let message = "";

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "KeyE") {
    event.preventDefault();
    textArea.textContent = "";
    const area = document.createElement("textarea");
    textArea.append(area);
    area.focus();

    area.addEventListener("input", () => {
      message = area.value;
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code === "KeyS") {
    event.preventDefault();
    textArea.innerHTML = message;
  }
});
