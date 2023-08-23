//Ask a user for age, if the input is not a number or a number over 120 or below 0,
//show error in console, else print in on the page with a welcome message

const age = parseInt(prompt("Enter your age"));

const checkAge = () => {
  return new Promise((resolve, reject) => {
    if (isNaN(age) || age > 120 || age < 0) {
      reject();
    } else {
      resolve();
    }
  });
};

checkAge()
  .then(() => {
    alert("Welcome, user!");
  })
  .catch(() => {
    console.error("Error age");
  });
