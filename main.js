import {accounts} from './js/data.js';
import {renderPersonalAccount} from './js/user-interface.js';
import {addLogin} from './js/login.js';
// import './js/transfer.js';

// Elements

const labelDate = document.querySelector('.date');

const labelTimer = document.querySelector('.timer');

// const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Create new property "login" based by firstname and lastname

addLogin(accounts);

// Rendering user interface

renderPersonalAccount(accounts);
