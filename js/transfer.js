import {renderUserTransactions} from './user-interface.js';
import {findTransferUser} from './login.js';

const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const btnTransfer = document.querySelector('.form__btn--transfer');
const totalBalance = document.querySelector('.balance__value');

let currentAcc;

btnTransfer.addEventListener('click', (evt) => {
  evt.preventDefault();

  const {login} = currentAcc;
  const userLoginTo = inputTransferTo.value;
  const transferAmountTo = +inputTransferAmount.value;
  const userAccountTo = findTransferUser(userLoginTo);

  if (
    +totalBalance.textContent.slice(0, -1) >= transferAmountTo &&
    transferAmountTo > 0 &&
    login !== userLoginTo &&
    userAccountTo
  ) {
    userAccountTo.transactions.push(transferAmountTo);
    currentAcc.transactions.push(-transferAmountTo);
    renderUserTransactions(currentAcc);
  } else {
    alert('Некторректные данные');
  }

  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

const transferMoney = (fromAcc) => {
  currentAcc = fromAcc;
};

export {transferMoney};
