export default (name) => {
  if (typeof name === 'string') return `You entered: ${name}`;
  throw new Error('there was an error');
};
