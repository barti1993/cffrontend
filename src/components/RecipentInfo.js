import React from "react";

/**
     * Recipent info step content component - renders dummy data
     *
     
  */

export default class RecipentInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={
          "recipent-info-box " + (this.props.isVisible ? " " : "hidden")
        }
      >
        <h3>This is a dummy recipent info step content</h3>
        <p>Only for showcase purposes</p>
      </div>
    );
  }
}
