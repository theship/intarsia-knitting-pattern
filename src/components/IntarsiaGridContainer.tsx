import React, { useState, SyntheticEvent, CSSProperties } from "react"
import { createContainer, useContainer } from "unstated-next"
import { ColorPickerContainer } from "./ColorPickerContainer";

import '../styles/css/styles.css'

export type cellItem = {
    id: string
    className: string
    style?: CSSProperties
 }
export interface MouseEvent {
    target: HTMLInputElement;
}


function InitIntarsiaGrid() {

    const [color, setColor] = useState("#fff");

    const backgroundStyle = {
        backgroundColor: color
    } as CSSProperties;

    return {
        color,
        backgroundStyle,
        setColor
    }
}

var GridContainer = createContainer(InitIntarsiaGrid);

function BuildIntarsiaGrid(){

    var START = 1, END = 1160;
    var useGridContainer = useContainer(GridContainer)

    var cellArray = 
        [...Array(1 + END - START).keys()].map((key: number, index: number) => <div
            id={`cell-` + (key + 1)}
            className="GridCell"
            key={key + 1}
            style={ useGridContainer.backgroundStyle }
            onMouseEnter={ handleOnColorChange}
        />)

    const picker = ColorPickerContainer.useContainer();

    function handleOnColorChange(event: SyntheticEvent) {
        event.preventDefault();
        if (event.target instanceof HTMLDivElement) {
            event.target.style.backgroundColor = ('white' ? picker.color : 'white')
        }
    };

        return (
        <>  
            <div className="intarsia-grid">
                {cellArray}
            </div>
            <button >THE PROFESSOR</button>
        </>
    )
}
function IntarsiaGrid() {

    return (
        <GridContainer.Provider>
            <BuildIntarsiaGrid />
        </GridContainer.Provider>
    )
}

export const IntarsiaGridContainer = createContainer(IntarsiaGrid);