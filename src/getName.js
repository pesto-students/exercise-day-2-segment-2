export default (name) => {
  if (typeof name === 'string') return name;
  throw new Error('there was an error');
};
