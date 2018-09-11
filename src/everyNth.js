// eslint-disable-next-line
const everyNth = (string, n) => string.split('').filter((a, i) => i % n === 0).join('');

export default everyNth;
