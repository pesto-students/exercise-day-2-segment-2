// eslint-disable-next-line
const everyNth = (string, n) => string.split('').filter((a, i) => i % n === 0).join('');

module.exports = everyNth;

// function every(string, n) {
//   const s = string.join('').filter((str, i) => i % n === 0);
//   return s;


// function every(string, n) {
//   string.forEach((index) => {
//     if (index % n === 0) return string[index];
//     return false;
//   });
// }

