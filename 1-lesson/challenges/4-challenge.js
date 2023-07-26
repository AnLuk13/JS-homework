//The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
let depositAmount = prompt("Enter the deposit amount");
let monthlyInterest = 5 / 100 / 12;
alert(
  "Your sum of interest for 2 months = " +
    (monthlyInterest * depositAmount * 2).toFixed(3)
);
