import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReduxRoot } from "./store/ReduxRoot";

import "./index.css";

const rootEl = document.getElementById("root");
ReactDOM.render(<ReduxRoot />, rootEl);
