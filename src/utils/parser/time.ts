export const padTo2Digits = (number: number) => {
  return number.toString().padStart(2, '0');
};

export const parseMillisecondsToTime = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  const readHours = padTo2Digits(hours) !== '00' ? `${padTo2Digits(hours)}시 ` : '';
  const readMinutes = !readHours && padTo2Digits(minutes) !== '00' ? `${padTo2Digits(minutes)}분 ` : '';
  const readSeconds = (!readHours || !readMinutes) && padTo2Digits(seconds) !== '00' ? `${padTo2Digits(seconds)}초` : '';

  return `${readHours}${readMinutes}${readSeconds}`;
};
