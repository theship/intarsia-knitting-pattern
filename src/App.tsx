import * as React from "react"
import { IntarsiaGridContainer } from "./components/IntarsiaGridContainer";
import IntarsiaGridComponent from "./components/IntarsiaGridComponent"
import { ColorPickerContainer } from "./components/ColorPickerContainer";
import ColorPickerComponent from "./components/ColorPickerComponent"
import DrawApp from "./components/DrawApp"

export default function App() {
  return (
    <>
    <React.Suspense fallback="Things are loading...">
          <div className="App">
            <ColorPickerContainer.Provider>
              <IntarsiaGridContainer.Provider>
                <IntarsiaGridComponent />
              </IntarsiaGridContainer.Provider>
              <ColorPickerComponent />
              <DrawApp />
            </ColorPickerContainer.Provider>
          </div>
    </React.Suspense>
    </>
  );
}

