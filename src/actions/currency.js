import React from "react";
import numeral from "numeral";

/**
 * Formats given amount of cash to specified currency and format
 *
 * @param {JSX} amount - amount of cash
 * @param {string} currency - currency
 * @param {string} specifiedFormat - display format
 */
export const formatCurrency = (amount, currency, specifiedFormat) => {
  switch (currency) {
    case "EUR":
      return "€ " + numeral(amount).format(specifiedFormat);
    case "GBP":
      return "£ " + numeral(amount).format(specifiedFormat);
    default:
      return undefined;
  }
};

/**
 * Returns the currency image by given currency value
 *
 * @param {string} currency - currency
 */
export const currencyImg = currency => {
  switch (currency) {
    case "EUR":
      return <img src="/images/currencies/eur.png" />;
    case "GBP":
      return <img src="/images/currencies/gbp.png" />;
    default:
      return undefined;
  }
};
