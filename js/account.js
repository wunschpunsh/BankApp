import {createLogin} from './util.js';
import {accounts} from './data.js';

// Interface
const containerApp = document.querySelector('.app');

const btnClose = document.querySelector('.form__btn--close');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const welcome = document.querySelector('.welcome');

const addLogin = (data) => {
  data.forEach((item) => {
    item.login = createLogin(item.userName);
  });
};

const signIn = (login, pin) => {
  return accounts.find((item) => item.login === login && item.pin === pin);
};

// Create new property "login" based by firstname and lastname

addLogin(accounts);

const findTransferUser = (login) => {
  return accounts.find((item) => item.login === login);
};

const findIndexDeleteUser = (login, pin) => {
  return accounts.findIndex((item) => item.login === login && item.pin === pin);
};

// Close account

let currentAcc;

btnClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  const {login, pin} = currentAcc;
  const userLogin = inputCloseUsername.value;
  const userPin = +inputClosePin.value;
  if (userLogin === login && userPin === pin) {
    const deleteUserIndex = findIndexDeleteUser(userLogin, userPin);
    accounts.splice(deleteUserIndex, 1);
    containerApp.style.opacity = '0';
    welcome.textContent = 'Войдите в свой аккаунт';
    inputCloseUsername.value = '';
    inputClosePin.value = '';
  } else {
    alert('Вы ввели неверные данные');
  }
});

const deleteAcc = (acc) => {
  currentAcc = acc;
};

export {signIn, findTransferUser, deleteAcc};
