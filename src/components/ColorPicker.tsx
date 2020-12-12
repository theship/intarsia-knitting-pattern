import React from 'react';
import { v4 as uuid } from 'uuid';
import { ColorPickerContainer } from "./ColorPickerContainer";
import { SketchPicker } from "react-color";

function ColorPickerComponent() {
    const picker = ColorPickerContainer.useContainer();
    return (
        <div>
            <p>Hello! {picker.color}</p>
            <div>
                <SketchPicker
                    key={uuid()}
                    color={picker.color}
                    onChange={picker.handleOnColorChange} />
                <button onClick={picker.updateColorName}>Save</button>
            </div>
        </div>
    );
}

export default ColorPickerComponent;