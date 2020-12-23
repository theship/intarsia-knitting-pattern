import * as React from "react"
import { IntarsiaGridContainer } from "./components/IntarsiaGridContainer";
import IntarsiaGridComponent from "./components/IntarsiaGridComponent"
import { ColorPickerContainer } from "./components/ColorPickerContainer";
import ColorPickerComponent from "./components/ColorPickerComponent"
import DrawAppMaksimIvanov from "./components/DrawAppMaksimIvanov"
import MouseEvent from "./components/MouseEvent"

export default function App() {
  return (
    <>
    <React.Suspense fallback="Things are loading...">
          <div className="App">
            <MouseEvent />
            <ColorPickerContainer.Provider>
              <IntarsiaGridContainer.Provider>
                <IntarsiaGridComponent />
              </IntarsiaGridContainer.Provider>
              <ColorPickerComponent />
            <DrawAppMaksimIvanov />
            </ColorPickerContainer.Provider>
          </div>
    </React.Suspense>
    </>
  );
}

