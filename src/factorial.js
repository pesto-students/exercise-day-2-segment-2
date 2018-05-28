/**
 * define factorial
 */

export default (number) => {
  let fact = 1;
  while (number !== 0) {
    fact *= number;
    // eslint-disable-next-line
    --number;
  }
  return fact;
};
