import {renderUserTransactions} from './transaction.js';

const btnLoan = document.querySelector('.form__btn--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

let currentAcc;

btnLoan.addEventListener('click', (evt) => {
  evt.preventDefault();
  const {transactions} = currentAcc;
  const inputUserLoan = +inputLoanAmount.value;
  const checkDeposites = transactions

    .filter((item) => item > 0)
    .some((item) => {
      return item > inputUserLoan * 0.1;
    });

  if (inputUserLoan > 0 && checkDeposites) {
    transactions.push(inputUserLoan);
    renderUserTransactions(currentAcc);
    inputLoanAmount.value = '';
  }
});

const requestLoan = (acc) => {
  currentAcc = acc;
};

export {requestLoan};
