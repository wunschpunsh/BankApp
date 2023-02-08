import {transferMoney} from './transfer.js';
import {renderUserTransactions} from './transaction.js';
import {createGreeting} from './util.js';
import {singIn} from './login.js';
import {createRenderSetting} from './transaction.js';

// User entry
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const btnLogin = document.querySelector('.login__btn');
const welcome = document.querySelector('.welcome');

// Balance transactions

const renderPersonalAccount = () => {
  btnLogin.addEventListener('click', (evt) => {
    evt.preventDefault();
    const login = inputLoginUsername.value;
    const pin = +inputLoginPin.value;
    const userAccount = singIn(login, pin);

    if (userAccount) {
      createRenderSetting();
      renderUserTransactions(userAccount);
      createGreeting(userAccount.userName, welcome);
      transferMoney(userAccount);
    } else {
      alert('Неправильные данные');
    }
  });
};

export {
  renderPersonalAccount,
  renderUserTransactions,
  inputLoginUsername,
  inputLoginPin,
};
