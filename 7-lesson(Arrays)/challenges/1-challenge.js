//Create an array of css-styles (color, font size, alignment, underline etc.)
//Each element of the array is an object consisting of two properties:
//style name and style value, Write a function that accepts the style array and
//a text and puts out this text via document.write() in the <p></p> tags, adding the style
//attribute with all the styles in the array to the opening tag.

const styleArray = [
  { styleName: "color", styleValue: "red" },
  { styleName: "font-size", styleValue: "40px" },
  { styleName: "text-align", styleValue: "center" },
  { styleName: "text-decoration", styleValue: "underline" },
];

function styleAccept() {
  let text = prompt("Enter a text");
  let styleAttribute = "";

  for (let style of styleArray) {
    styleAttribute += `${style.styleName}: ${style.styleValue};`;
  }

  document.write(`<p style="${styleAttribute}">${text}</p>`);
}

styleAccept();
