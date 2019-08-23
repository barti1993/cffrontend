import React from "react";
import { Link } from "react-router-dom";

/**
 * Not found page component with a link redirecting to homepage (in our case Currency Exchange Page)
 *
 */

const NotFoundPage = () => (
  <div>
    404 - Page Not Found (has not been created yet) <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
