import {summarizeBalance, createGreeting} from './util.js';

// User entry
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const btnLogin = document.querySelector('.login__btn');
const welcome = document.querySelector('.welcome');

// Transactions
const containerTransactions = document.querySelector('.transactions');

// Balance transactions
const totalBalance = document.querySelector('.balance__value');
const totalSumIn = document.querySelector('.total__value--in');
const totalSumOut = document.querySelector('.total__value--out');
const totalSumInterest = document.querySelector('.total__value--interest');

// Interface
const containerApp = document.querySelector('.app');

// Default setting for rendering user interface

const createRenderSetting = () => {
  containerTransactions.innerHTML = '';
  containerApp.style.opacity = '1';
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
};

// Rendering balance and transactions value

const renderBalanceProperties = (value, percent) => {
  totalBalance.textContent = summarizeBalance('All', value);
  totalSumIn.textContent = summarizeBalance('In', value);
  totalSumOut.textContent = summarizeBalance('Out', value);
  totalSumInterest.textContent = summarizeBalance('Percent', value, percent);
};

// Rendering user interface

const renderUserTransactions = (data) => {
  const {transactions, interest, userName} = data;
  createRenderSetting();
  createGreeting(userName, welcome);

  transactions.forEach((item, index) => {
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

const renderPersonalAccount = (data) => {
  btnLogin.addEventListener('click', (evt) => {
    evt.preventDefault();

    const userAccount =
      data.find(
        (item) =>
          item.login === inputLoginUsername.value.toLowerCase() &&
          item.pin === +inputLoginPin.value
      ) || alert('Вы ввели неправильные данные');
    if (userAccount) {
      renderUserTransactions(userAccount);
    }
  });
};

export {renderPersonalAccount};
