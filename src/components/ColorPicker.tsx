import React, {useState, useEffect} from "react";
import { SketchPicker } from "react-color";

interface IStateColor {
    setColor: string,
}
interface IStateShowPicker {
    setShowColorPicker: boolean,
}

const ColorPicker: React.FC = () => {
    const [color, setColor] = useState<IStateColor | string>("#DB1374")
    const [showColorPicker, setShowColorPicker] = useState<IStateShowPicker | boolean>(false)

    useEffect(() => {
        setColor(color)
    }, [color])

    return (
        <div className="ColorPicker">
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'Close' : 'Color'}
            </button>

            {showColorPicker && (
                <SketchPicker
                    onChange={updatedColor => setColor(updatedColor.hex)}
                    color={color}
                />
            )}
            <h3>Current color: {color}</h3>
        </div>
    );
}
export default ColorPicker;
