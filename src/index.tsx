import * as React from "react";
import { render } from "react-dom";
import App from "./App";

/* export * from './components/ColorPickerComponent';
export * from './components/IntarsiaGridComponent';
 */

const Root = () => (
    <App />
)

render(<Root />, document.getElementById("root"));