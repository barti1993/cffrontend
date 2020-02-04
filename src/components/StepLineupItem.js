import React from "react";


  /**
     * Single step item component, renders single step, you can specify step number, title, description 
     *
     * @param {int} stepnumber - number of step in step-lineup component (order number)
     * @param {string} steptitle - holds the step title
     * @param {string} description - holds tha step description
     * @param {currentStep} currentStep - stores information which step is currently active
  */ 
const StepLineupItem = ({
  stepnumber,
  steptitle,
  description,
  currentStep
}) => {
  return (
    <div
      className={
        "step-lineup-item " + (currentStep === stepnumber ? "current-step" : "")
      }
    >
      <h3>{steptitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StepLineupItem;
