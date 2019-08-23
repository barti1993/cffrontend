import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const jsx = <AppRouter passValues />;

ReactDOM.render(jsx, document.getElementById("app"));
