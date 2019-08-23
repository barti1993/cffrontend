import React from "react";
import ExchangeBoxItem from "./ExchangeBoxItem";
import VerificationModal from "./VerificationModal";


 /**
     * Exchange box renders send and receive components (you could add more types, exchange box items if you want)
     *
     * @param {props} exchangeData - data passed down the components tree
     * @param {state} isOpen - true if modal is opened, false if not
  */
export default class ExchangeBox extends React.Component {
  constructor(props) {
    super(props);

    // isOpen - true if modal is opened, false if not
    this.state = {
      isOpen: false
    };
  }

 
  /**
     * Function to handle change of isOpen state, when modal opens (change isOpen to true)
     *
  */
  handleIsOpenChange = () => {
    this.setState(() => ({ isOpen: true }));
  };
  
    /**
     * Function to handle change of isOpen state, when modal closes (change isOpen to false)
     *
  */
  handleClearIsOpenState = () => {
    this.setState(() => ({ isOpen: false }));
  };

  render() {
    return (
      <div
        className={"exchange-box " + (this.props.isVisible ? " " : "hidden")}
      >
        <h2>Let's set up your transaction!</h2>
        <p>Specify the amount to be sent or received</p>
        <ExchangeBoxItem
          headertext="You sent"
          amount={this.props.exchangeData.sendAmount}
          currency={this.props.exchangeData.sendCurrency}
          type="send"
        />
        <ExchangeBoxItem
          headertext="Receiver gets"
          amount={this.props.exchangeData.receiveAmount}
          currency={this.props.exchangeData.receiveCurrency}
          type="receive"
        />
        <button className="button" onClick={this.handleIsOpenChange}>
          Next
        </button>
        <VerificationModal
          isOpen={this.state.isOpen}
          handleClearIsOpenState={this.handleClearIsOpenState}
          handleIncrementStep={this.props.handleIncrementStep}
        />
      </div>
    );
  }
}
