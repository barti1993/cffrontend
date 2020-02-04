import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ExchangePage from "../components/ExchangePage";
import NotFoundPage from "../components/NotFoundPage";

// Example data, can be passed from external API or backend
const data = {
  senderCurrency: "EUR",
  senderAmount: "2000",
  receiverCurrency: "GBP",
  receiverAmount: "1717.94",
  rate: "0.86022",
  fee: "2.50",
  deliveryDate: "25th November"
};

/**
 * Simple app router with Currency Exchange Page and Not Found (404 page)
 *
 */
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={() => <ExchangePage exchangeData={data} />}
          exact={true}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
