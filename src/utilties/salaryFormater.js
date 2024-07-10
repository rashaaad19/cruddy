export const salaryFormater = (salary) => {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return numberFormat.format(salary);
};
