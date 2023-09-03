//Create a factory function that generates bank account objects with
//properties accountNumber, accountHolder, and balance.
//Implement methods for depositing and withdrawing funds from the account.

function bankAcc() {
  return {
    accountNumber: 1234,
    accountHolder: "John",
    balance: 500,
    depositFunc: function (sum) {
      this.balance = this.balance - sum;
      alert("Current balance: " + this.balance);
    },
    withdrawFunc: function (sum) {
      this.balance = this.balance + sum;
      alert("Current balance: " + this.balance);
    },
  };
}

const account = bankAcc();
operation = prompt(`1. Deposit
2. Withdraw`);
sum = parseInt(prompt("Enter a sum"));
if (operation == 1) {
  account.depositFunc(sum);
} else account.withdrawFunc(sum);
