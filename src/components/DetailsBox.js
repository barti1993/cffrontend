import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../actions/currency";

/**
 * Details box renders exchange details in the sidebar
 *
 * @param {props} exchangeData - data passed down from components tree
 */
export default class DetailsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  //Formatted amount of cash send
  sendFormattedAmount = formatCurrency(
    this.props.exchangeData.senderAmount,
    this.props.exchangeData.senderCurrency,
    "0.00"
  );
  //Formatted amount of cash received
  receiveFormattedAmount = formatCurrency(
    this.props.exchangeData.receiverAmount,
    this.props.exchangeData.receiverCurrency,
    "0.00"
  );
  //Formatted amount of fee
  receiveFormattedFee = formatCurrency(
    this.props.exchangeData.fee,
    this.props.exchangeData.receiverCurrency,
    "0.00"
  );

  render() {
    return (
      <div className="details-box">
        <div className="details-box__sending-details">
          <div className="details-box__header">Sending details</div>
          <div className="details-box__body">
            <div className="details-box__item">
              <span className="label">You send</span>
              <span className="content">{this.sendFormattedAmount}</span>
            </div>
          </div>
        </div>
        <div className="details-box__receiving-details">
          <div className="details-box__header">
            Receiving details
            <Link to={`/ask-for-right-now`}>
              Ask for right now
              <img src="/images/question-mark.png" />
            </Link>
          </div>
          <div className="details-box__body">
            <div className="details-box__item">
              <span className="label">Rate</span>
              <span className="content">{this.props.exchangeData.rate}</span>
            </div>
            <div className="details-box__item">
              <span className="label">Fee</span>
              <span className="content">{this.receiveFormattedFee}</span>
            </div>
            <div className="details-box__item">
              <span className="label">Delivery date</span>
              <span className="content">
                {this.props.exchangeData.deliveryDate}
              </span>
            </div>
            <div className="details-box__item">
              <span className="label">Recipent gets</span>
              <span className="content total">
                {this.receiveFormattedAmount}
              </span>
            </div>
          </div>
        </div>
        <div className="details-box__footer">
          You save $66.19 compared your bank!
        </div>
      </div>
    );
  }
}
