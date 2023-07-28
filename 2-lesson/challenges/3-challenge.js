//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result.
let amount = prompt("Enter your amount");
let currency = prompt("Enter your currency");

if (currency == "EUR") {
  amount = (amount / 1.103).toFixed(3);
  alert(`In eur it is equal to ${amount}`);
} else if (currency == "SEK") {
  amount = (amount / 0.095).toFixed(3);
  alert(`In sek it is equal to ${amount}`);
} else if (currency == "AUD") {
  amount = (amount / 0.67).toFixed(3);
  alert(`In aud it is equal to ${amount}`);
} else {
  alert(`There is not such currency`);
}
