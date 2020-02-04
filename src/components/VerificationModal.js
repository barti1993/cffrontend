import React from "react";
import Modal from "react-modal";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import InputGroup from "./InputGroup";
import receivecodeImg from "./../../public/images/refresh-page-option.svg";
import receiveviacallImg from "./../../public/images/call-answer.svg";
import padlockImg from "./../../public/images/locked-padlock.svg";

/**
     * Renders code verification modal 
     *
     * @param {state} values - array of entered InputsGroup values 
     * @param {state} isVerifyDisabled - holds the state of verify-button disabled attribute (true or false)
     * @param {state} verifyError - is verification code correct or not (true or false)
     
  */

export default class VerificationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    values: [],
    isVerifyDisabled: true,
    verifyError: false
  };

  /**
   * Action performed on verify-button click
   * Increments current step by 1 (moves to the next step)
   * Closes the modal and clears state values array
   *
   */
  submit = () => {
    const isVerifyCorrect = this.verifyCode();
    if (isVerifyCorrect) {
      this.props.handleIncrementStep();
      this.props.handleClearIsOpenState();
      this.clearState();
    } else {
      this.setState({ verifyError: true });
    }
  };

  /**
   * Checks if verification code is correct
   *
   */
  verifyCode = () => {
    if (this.state.values.join("") === "233456") {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Clears entered InputsGroup state array values and makes verify-button disabled
   *
   */
  clearState = () => {
    this.setState({ values: [], isVerifyDisabled: true, verifyError: false });
  };

  /**
   * Check if entered inputgroup single input value is digit, then moves caret to next input
   *
   * @param {object} e  - input object
   */
  handleFillInputGroup = e => {
    let values = this.state.values;
    let id = parseInt(e.target.id);
    let value = e.target.value;
    if (!isNaN(value) && value !== " " && value.length < 2) {
      values[id] = e.target.value;
      if (value !== "") {
        if (e.currentTarget.nextElementSibling) {
          e.currentTarget.nextElementSibling.focus();
        } else {
          e.currentTarget.blur();
        }
      }
    } else {
      e.target.value = "";
      values[id] = e.target.value;
    }
    this.setState({ values: values });
    this.isVerificationCodeFilled();
  };

  /**
   * Check if all the inputs in the InputGroups are filled, and controls the isVerifyDisabled state
   * If all the inputs are filled sets isVerifyDisabled state to false, in other case sets it to true
   * Function provides controlling verify code button disabillity
   */
  isVerificationCodeFilled = () => {
    let codeArr = this.state.values;
    if (codeArr.join("").length === 6) {
      this.setState({ isVerifyDisabled: false });
      this.setState({ verifyError: false });
    } else {
      this.setState({ isVerifyDisabled: true });
    }
  };

  render() {
    return (
      <Modal
        isOpen={!!this.props.isOpen}
        onRequestClose={this.props.handleClearIsOpenState}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__header">
          <div className="modal__header__title_container">
            <SVG className="padlock-img" src={padlockImg} />
            <h3 className="modal__title">Identity verification required</h3>
          </div>
          <p>
            For your security, we ocassionally require you to verify your
            identity by entering a code sent to your mobile device.
          </p>
        </div>
        <div className="modal__body">
          <div className="modal__body__vefification-message">
            <p>
              <div>Enter the code sent via SMS to</div>
              <div className="number-container">
                <span className="prefix-number">+353</span>
                <span className="number">872251177</span>
              </div>
            </p>
            <div className="modal__body__input-fields">
              <InputGroup
                values={this.state.values}
                onValueChanged={this.handleFillInputGroup.bind(this)}
                numberOfInputs={6}
              />
            </div>
            {this.state.verifyError === true ? (
              <div className={"error"}>Invalid code</div>
            ) : (
              ""
            )}
            <div className="modal__body__verification-links">
              <Link to={`/receive-a-new-code`}>
                {" "}
                <SVG className="receive-code-img" src={receivecodeImg} />
                Receive a new code
              </Link>

              <Link to={`/receive-code-via-call`}>
                <SVG
                  className="receive-code-via-call-img"
                  src={receiveviacallImg}
                />
                Receive code via call instead
              </Link>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="modal__footer__buttons">
            <button
              className="verify-identity"
              onClick={this.submit.bind(this)}
              disabled={this.state.isVerifyDisabled}
            >
              Verify Identity
            </button>
            <button
              className="back-button"
              onClick={() => {
                this.clearState();
                this.props.handleClearIsOpenState();
              }}
            >
              Back
            </button>
          </div>
          <div className="modal__footer__links">
            <Link to={`/mobile-device-access`}>
              I can't access this mobile device
            </Link>
          </div>
        </div>
      </Modal>
    );
  }
}
