export const removeCurrencyMask = (value) => {
  value = value.replace(/[^\d]+/g,'');
  value = value.replace(',', '.');
  return value;
};
