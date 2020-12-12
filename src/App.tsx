import * as React from "react"
import IntarsiaGrid from "./components/IntarsiaGrid"
import { ColorPickerContainer } from "./components/ColorPickerContainer";
import ColorPicker from "./components/ColorPicker"


export default function App() {
  return (
    <>
    <React.Suspense fallback="Things are loading...">
          <div className="App">
            <ColorPickerContainer.Provider>
              <IntarsiaGrid />
              <ColorPicker />
            </ColorPickerContainer.Provider>
          </div>
    </React.Suspense>
    </>
  );
}

