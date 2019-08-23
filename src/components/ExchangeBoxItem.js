import React from "react";
import { formatCurrency, currencyImg } from "../actions/currency";

/**
 * Renders single exchange box item, you can specify type of the component , amount and currency given and title
 *
 * @param {string} headertext Title of exchange box item
 * @param {string} amount specified amount of money
 * @param {string} currency specified currency
 * @param {string} type  type of exchange box item, could be send or receive
 */
const ExchangeBoxItem = ({ headertext, amount, currency, type }) => {
  // Formats given amount to specific currency and format display
  const formattedCurrency = formatCurrency(amount, currency, "0,000.00");

  // Split amount by dot
  const splittedformattedCurrency = formattedCurrency.split(".");

  // Load img currency flag for specified currency
  const currencyFlag = currencyImg(currency);

  return (
    <div
      className={
        type === "send"
          ? "exchange-box__item sender-box"
          : "exchange-box__item receiver-box"
      }
    >
      <div className="amount">
        <h3>{headertext}</h3>
        <div>
          {splittedformattedCurrency[0]}.
          <span className="amountDottedExtension">
            {splittedformattedCurrency[1]}
          </span>
        </div>
      </div>
      <div className="currency">
        {currencyFlag}
        {currency}
      </div>
    </div>
  );
};

export default ExchangeBoxItem;
