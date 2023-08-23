//Create a functioning calculator using jQuery

$(document).ready(() => {
  const display = $("#display");
  display.val("0");
  let number = "";
  let operator = "";
  let checkOperator = false;
  let checkBackspace = false;

  $(".backspace").click(() => {
    if (number.length < 2) {
      checkBackspace = true;
      display.val("0");
    } else if (!checkBackspace) {
      numberArrayBackspace = number.trim().slice(0, -1);
      number = numberArrayBackspace;
      display.val(number);
    }
  });

  $(".buttons").click((e) => {
    const clickedButton = $(e.target);

    if (clickedButton.hasClass("digit")) {
      const digit = clickedButton.text();
      number += digit;
      display.val(number);
      checkOperator = false;
    } else if (clickedButton.hasClass("operator")) {
      const newOperator = clickedButton.text();
      if (!checkOperator) {
        operator = clickedButton.text();
        number += ` ${operator} `;
        display.val(number);
        checkOperator = true;
        checkBackspace = false;
      } else {
        operator = newOperator;
        numberArray = number.trim().split(" ");
        numberArray.pop();
        number = numberArray.join(" ") + ` ${operator} `;
        display.val(number);
      }
    } else if (clickedButton.hasClass("dot")) {
      number += ".";
      display.val(number);
      checkOperator = true;
      checkBackspace = false;
    } else if (clickedButton.attr("id") === "clear") {
      number = "";
      display.val("0");
    } else if (clickedButton.attr("id") === "equal") {
      const result = eval(number);
      display.val(result);
      number = result.toString();
      checkBackspace = false;
    }
  });
});
