import React from "react";
import StepLineup from "./StepLineup";
import ExchangeBox from "./ExchangeBox";
import RecipentInfo from "./RecipentInfo";
import ExchangeBoxFooter from "./ExchangeBoxFooter";

/**
 * Renders main content of exchange currency page
 *
 * @param {props} exchangeData - data passed down the component tree
 * @param {state} currentStep - which step is currently active/displayed
 */

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    //Current step of currency fair exchange process, default start from 1
    this.state = {
      currentStep: 1
    };
  }

  /**
   * Controls visibility of step content, returns true or false whether specific step content component should be visible or not
   *
   * @param {int} stepContentNumber - handle current visible step
   */

  handleIsStepContentVisible = stepContentNumber => {
    if (this.state.currentStep === stepContentNumber) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Increments current step by 1 which makes move to the next process step
   *
   */

  handleIncrementStep = () => {
    this.setState(() => ({ currentStep: this.state.currentStep + 1 }));
  };

  // Render main content component (left side) of the page
  render() {
    return (
      <div className="main-container">
        <div className="box-container">
          <StepLineup currentStep={this.state.currentStep} />
          <ExchangeBox
            exchangeData={this.props}
            handleIncrementStep={this.handleIncrementStep}
            isVisible={this.handleIsStepContentVisible(1)}
          />
          <RecipentInfo isVisible={this.handleIsStepContentVisible(2)} />
          <ExchangeBoxFooter />
        </div>
      </div>
    );
  }
}
