// import {inputLoginUsername, inputLoginPin} from './user-interface.js';
import {summarizeBalance} from './util.js';

// Transactions
const containerTransactions = document.querySelector('.transactions');

// Interface
const containerApp = document.querySelector('.app');

// Balance transactions
const totalBalance = document.querySelector('.balance__value');
const totalSumIn = document.querySelector('.total__value--in');
const totalSumOut = document.querySelector('.total__value--out');
const totalSumInterest = document.querySelector('.total__value--interest');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

// Default setting for rendering user interface

const createRenderSetting = () => {
  containerTransactions.innerHTML = '';
  containerApp.style.opacity = '1';
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
};

// // Rendering balance and transactions value

const renderBalanceProperties = (transData, percent) => {
  totalBalance.textContent = `${summarizeBalance('All', transData)}$`;
  totalSumIn.textContent = `${summarizeBalance('In', transData)}$`;
  totalSumOut.textContent = `${summarizeBalance('Out', transData)}$`;
  totalSumInterest.textContent = `${summarizeBalance(
    'Percent',
    transData,
    percent
  )}$`;
};

// Rendering user interface

const renderUserTransactions = (userAcc, sort) => {
  const {transactions, interest} = userAcc;

  const viewTransactions = sort
    ? transactions.slice().sort((a, b) => a - b)
    : transactions;

  viewTransactions.forEach((item, index) => {
    const transaction = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${
        item > 0 ? 'deposit' : 'withdrawal'
      }">
        ${index + 1} ${item > 0 ? 'депозит' : 'вывод средств'}
      </div>
      <div class="transactions__date">2 дня назад</div>
      <div class="transactions__value">${item}$</div>
    </div>`;

    containerTransactions.insertAdjacentHTML('afterbegin', transaction);
  });

  renderBalanceProperties(transactions, interest);
};

export {renderUserTransactions, createRenderSetting};
