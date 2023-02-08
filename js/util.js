const createLogin = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map((item) => item[0])
    .join('');
};

const summarizeBalance = (param, data, percent) => {
  let summ;

  switch (param) {
    default:
      summ = '0$';
      break;
    case 'All':
      summ = data.reduce((acc, item) => acc + item, 0);
      break;
    case 'In':
      summ = data
        .filter((item) => item > 0)
        .reduce((acc, item) => acc + item, 0);
      break;
    case 'Out':
      summ = data
        .filter((item) => item < 0)
        .reduce((acc, item) => acc + item, 0);
      break;
    case 'Percent':
      summ = Math.trunc(
        data
          .filter((item) => item > 0)
          .map((item) => (item * percent) / 100)
          .reduce((acc, item) => acc + item, 0)
      );
  }
  return summ;
};

const createGreeting = (name, element) => {
  element.textContent = `Добро пожаловать, ${name.split(' ')[0]}`;
};

export {createLogin, summarizeBalance, createGreeting};
