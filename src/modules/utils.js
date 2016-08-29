import months from '../constants';

//ex. 8 ==> 08, 08 ==> 8
const format = date => {
 if (date[0] === '0') {
  return date[1];
 }
  return date.toString(10).length === 1 ? `0${date}` : date;
};

// ex. 2016-28-8 --> Aug. 28, 2016
export const dateToString = date => {
  const dateArr = date.split('-');
  return `${months[format(dateArr[1])]}. ${dateArr[2]}, ${dateArr[0]}`;
}

export const getCurDate = (date = new Date) => (
  `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`
);
