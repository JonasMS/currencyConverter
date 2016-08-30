import months from '../constants';

//ex. 8 ==> 08, 08 ==> 8
const formatDate = date => {
  if (typeof date === 'number') {
    date = date.toString(10);
  }

  if (date[0] === '0') {
  return date[1];
  }

  return date.length === 1 ? `0${date}` : date;
};

// ex. 2016-28-8 --> Aug. 28, 2016
export const dateToString = date => {
  const dateArr = date.split('-');
  return `${months[formatDate(dateArr[1])]}. ${dateArr[2]}, ${dateArr[0]}`;
}

export const getCurDate = (date = new Date) => (
  `${date.getFullYear()}-${formatDate(date.getMonth() + 1)}-${formatDate(date.getDate())}`
);


// get's a preceding or following month, changes year if limit exceeded
export const calcDate = (date, i) => {
  const dateArr = date.split('-');
  const curMonth = parseInt(dateArr[1], 10) + i;

  if (curMonth <= 0) {
    return `${parseInt(dateArr[0]) - 1}-${formatDate(12 + curMonth)}-${dateArr[2]}`;
  }

  if (curMonth > 12) {
    return `${parseInt(dateArr[0]) + 1}-${formatDate(curMonth - 12)}-${dateArr[2]}`
  }

  dateArr[1] = formatDate(curMonth);
  return dateArr.join('-');
};

// return TRUE if occurs before or on b, else return false
export const compareDates = (dateA, dateB) => {
  if (dateA === dateB) {
    return true;
  }

  const b = dateB.split('-');

  return dateA.split('-').reduce((occursBefore, date, idx) => {
    if (!occursBefore) {
      return date < b[idx];
    }
    return occursBefore;
  }, false)
}
