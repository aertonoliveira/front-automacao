export const removeCurrencyMask = (value) => {
  value = value.replace(/(\.)/g, '');
  value = value.replace(',', '.');
  return value;
};
