import { MONTHS, DAYS_IN_MONTH } from '../constants';

//ex. 8 ==> 08, 08 ==> 8
const formatDate = date => {
  if (typeof date === 'number') {
    date = date.toString(10);
  }

  if (date[0] === '0') {
  return parseInt(date[1]);
  }

  return date.length === 1 ? `0${date}` : date;
};

// ex. 2016-8-28 --> Aug. 28, 2016
export const dateToEnglish = date => {
  const dateArr = date.split('-');
  return `${MONTHS[formatDate(dateArr[1]) - 1]}. ${dateArr[2]}, ${dateArr[0]}`;
}

export const getCurDate = (date = new Date) => (
  `${date.getFullYear()}-${formatDate(date.getMonth() + 1)}-${formatDate(date.getDate())}`
);


// get's a preceding or following month, changes year if limit exceeded
export const calcDate = (date, i) => {
  const dateArr = date.split('-');
  let curYear = parseInt(dateArr[0], 10);
  let curMonth = parseInt(dateArr[1], 10) + i;
  let curDay = parseInt(dateArr[2], 10);

  if (curMonth <= 0) {
    curYear--;
    curMonth += 12;
    // curDay = Math.min(parseInt(dateArr[2], 10), DAYS_IN_MONTH[curMonth - 1]);
    // return `${curYear}-${formatDate(curMonth)}-${formatDate(curDay)}`;
  } else  if (curMonth > 12) {
    curYear++;
    curMonth -= 12;
  }
    curDay = Math.min(curDay, DAYS_IN_MONTH[curMonth - 1]);
    return `${curYear}-${formatDate(curMonth)}-${formatDate(curDay)}`;
};

// return TRUE if occurs before or on b, else return false
export const compareDates = (dateA, dateB) => {
  const a = dateA.split('-');
  const b = dateB.split('-');

  for (let i = 0; i < a.length; i++) {
    if (parseInt(a[i], 10) === parseInt(b[i], 10)) {
      continue;
    }
    return parseInt(a[i], 10) < parseInt(b[i], 10);
  }

  return true;
}
