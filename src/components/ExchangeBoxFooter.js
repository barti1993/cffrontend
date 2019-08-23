import React from "react";
import { Link } from "react-router-dom";

  /**
     * Renders exchange page footer, visible on all steps
     *
  */
const ExchangeBoxFooter = () => (
  <div className="exchange-box-footer">
    <div className="copyright">&copy;2016 CurrencyFair</div>
    <div className="footer-links" >
      <Link to={`/help-support`}>Help & Support</Link>
      <Link to={`/legal-stuff`}>Legal Stuff</Link>
    </div>
  </div>
);

export default ExchangeBoxFooter;
