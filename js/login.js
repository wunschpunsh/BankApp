import {createLogin} from './util.js';
import {accounts} from './data.js';

const addLogin = (data) => {
  data.forEach((item) => {
    item.login = createLogin(item.userName);
  });
};

const singIn = (login, pin) => {
  return accounts.find((item) => item.login === login && item.pin === pin);
};

const findTransferUser = (login) => {
  return accounts.find((item) => item.login === login);
};

export {addLogin, singIn, findTransferUser};
