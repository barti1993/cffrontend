import React from "react";
import DetailsBox from "./../components/DetailsBox";

/**
 * Render steps labels for exchange process
 * @param {props} exchangeData - data passed down from components tree
 */

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar">
        <DetailsBox exchangeData={this.props.exchangeData} />
      </div>
    );
  }
}
