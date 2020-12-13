import { useState } from "react";
import { createContainer } from 'unstated-next'

const useColorPicker = () => {
    const [color, setColor] = useState("#000");
    const [colorname, setName] = useState("white");

    const handleOnColorChange = (event:any) => {
        setColor(event.hex);
    };

    const updateColorName = (event: any) => {
        event.preventDefault();
        setName(color);
    };

    return {
        color,
        colorname,
        handleOnColorChange,
        updateColorName,
    };
};

export const ColorPickerContainer = createContainer(useColorPicker)