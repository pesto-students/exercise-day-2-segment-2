export default (name) => {
  if (typeof name === 'string') return '/Ramu/';
  throw new Error('name should be of type string');
};
