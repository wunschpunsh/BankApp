import {renderPersonalAccount} from './js/user-interface.js';

import './js/delete-acc.js';

// Elements

const labelDate = document.querySelector('.date');

const labelTimer = document.querySelector('.timer');

const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// Rendering user interface

renderPersonalAccount();
