export const converCurrencySymbol = (currencIsoCode) => {
  switch (currencIsoCode) {
    case "USD":
      return "$";
    case "BRL":
      return "R$";
    default:
      break;
  }
};
