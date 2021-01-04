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
    var isDoubleClicked:boolean = false;

    var cellArray = 
        [...Array(1 + END - START).keys()].map((key: number, index: number) => <div
            id={`cell-` + (key + 1)}
            className="GridCell"
            key={key + 1}
            style={ useGridContainer.backgroundStyle }
            onMouseEnter={ handleOnMouseEnter }
            onDoubleClick={ handleOnDoubleClick }
        />)

    const picker = ColorPickerContainer.useContainer();

    function handleOnDoubleClick(event: SyntheticEvent) {
        event.preventDefault();
        isDoubleClicked = !isDoubleClicked;

        if (!isDoubleClicked) {
            return
        }
    };
    
    function handleOnMouseEnter(event: SyntheticEvent) {
        event.preventDefault();

        if (isDoubleClicked && event.target instanceof HTMLDivElement) {
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