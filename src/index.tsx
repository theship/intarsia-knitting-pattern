import * as React from "react";
import { render } from "react-dom";
import App from "./App";

export * from './components/ColorPicker';

const Root = () => (
    <App />
)

render(<Root />, document.getElementById("root"));