import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

/**
 * Renders exchange page, separated to main content (left side) and sidebar (right side)
 * @param {props} exchangeData - data passed down the components tree
 */
export default class ExchangePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <MainContent
          sendAmount={this.props.exchangeData.senderAmount}
          sendCurrency={this.props.exchangeData.senderCurrency}
          receiveAmount={this.props.exchangeData.receiverAmount}
          receiveCurrency={this.props.exchangeData.receiverCurrency}
        />
        <Sidebar exchangeData={this.props.exchangeData} />
      </div>
    );
  }
}
