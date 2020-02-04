import React from "react";

/**
 * InputGroup component renders inputs for verification code
 *
 * @param {props} onValueChanged - function which handle entering values to inputs and moving caret
 * @param {state} values -  array of values entered
 * @param {props} numberOfInputs - number of inputs to be rendered in the component
 */
export default class InputGroup extends React.Component {
  state = { values: [] };

  /**
   * Render number of inputs by given input quantity parameter
   *
   * @param {JSX} numberOfInputs number of inputs to be rendered on the screen
   */
  createInputGroup = numberOfInputs => {
    let inputsValuesArr = [];
    for (let i = 0; i < numberOfInputs; i++) {
      inputsValuesArr.push(
        <input
          key={i}
          id={i}
          ref={i}
          onChange={e => this.props.onValueChanged(e)}
          autoFocus={i === 0}
          value={this.props.values[i]}
        />
      );
    }
    return inputsValuesArr;
  };

  render() {
    return <div>{this.createInputGroup(this.props.numberOfInputs)}</div>;
  }
}
