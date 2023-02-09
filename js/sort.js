import {renderUserTransactions} from './transaction.js';

const btnSort = document.querySelector('.btn--sort');
const containerTransactions = document.querySelector('.transactions');

let currentAcc;
let sortState = false;
btnSort.addEventListener('click', (evt) => {
  evt.preventDefault();

  containerTransactions.innerHTML = '';

  renderUserTransactions(currentAcc, !sortState);
  sortState = sortState ? false : true;
});

const sortTransactions = (acc) => {
  currentAcc = acc;
};
export {sortTransactions};
