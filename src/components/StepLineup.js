import React from "react";
import StepLineupItem from "./StepLineupItem";

 /**
     * Render steps labels for exchange process
     * @param {props} currentStep - holds information about which step is currently active
  */  
export default class StepLineup extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className="step-lineup-container">
        <StepLineupItem
          stepnumber={1}
          steptitle="Step 1"
          description="Transaction info"
          currentStep={this.props.currentStep}
        />
        <StepLineupItem
          stepnumber={2}
          steptitle="Step 2"
          description="Recipent info"
          currentStep={this.props.currentStep}
        />
        <StepLineupItem
          stepnumber={3}
          steptitle="Step 3"
          description="Make payment"
          currentStep={this.props.currentStep}
        />
      </div>
    );
  }
}
