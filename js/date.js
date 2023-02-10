const labelDate = document.querySelector('.date');

const getDifferenceInDay = (dayLast, dayCurrent) => {
  let date = Math.round(Math.abs(dayCurrent - dayLast) / (1000 * 60 * 60 * 24));
  return date;
};

const getDate = (paramDate, mainDate) => {
  let date;

  if (paramDate) {
    date = new Date(paramDate);
  } else {
    const currentDate = Date.now();
    date = new Date(currentDate);
  }
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let dayPassed = getDifferenceInDay(date, new Date());

  // Param for render current date
  if (dayPassed === 0 && mainDate)
    return `${day <= 9 ? '0' + day : day}/${
      month <= 9 ? '0' + month : month
    }/${year}`;

  // Param for render date transactions
  if (dayPassed === 0) return 'Сегодня';
  if (dayPassed === 1) return 'Вчера';
  if (dayPassed <= 4) return `${dayPassed} дня назад`;
  else
    return `${day <= 9 ? '0' + day : day}/${
      month <= 9 ? '0' + month : month
    }/${year}`;
};

// Set current day

labelDate.textContent = `${getDate(new Date(), true)}`;

export {getDate, getDifferenceInDay};
