import {createLogin} from './util.js';

const addLogin = (data) => {
  data.forEach((item) => {
    item.login = createLogin(item.userName);
  });
};

export {addLogin};
