/* import { useEffect, useRef, useState } from "react";
 */import { createContainer } from 'unstated-next'
import { ColorPickerContainer } from "./ColorPickerContainer";
import { Row } from 'react-bootstrap';
import '../styles/css/styles.css';

const
    gridDim = {
        x: 40,
        y: 29
    },
    cellDim = {
        width: '30px',
        height: '20px'
    }

function GridRow(props) {
    const rowStyle = {
        margin: '0',
        marginBottom: '-8px',
        padding: '0'
    }
    return (
        <Row style={rowStyle}>
            { props.row.map(id => <Cell id={String(id)} key={String(id)}  />)}
        </Row>
    )
}

function Cell(props) {

    const cellStyles = {
        backgroundColor: 'white',
        width: cellDim.width,
        height: cellDim.height,
        border: "2px solid gray",
        display: 'inline-block',
        margin: '0',
        marginLeft: '-1px'
    }
    const picker = ColorPickerContainer.useContainer();

    function handleGridClick(event: any) {
        var targetStyle = event.currentTarget.style
        targetStyle.backgroundColor = (targetStyle.backgroundColor === 'white' ? picker.color : 'white')
    }

/*     const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

 */    return (
        <div
            key={props.id}
            onClick={handleGridClick}
/*             onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
 */            id={props.id}
            style={cellStyles}
        />
    );
}

const useIntarsiaGrid = () => {

    return {
        gridDim,
        cellDim,
        GridRow,
        Cell
    };
}

export const IntarsiaGridContainer = createContainer(useIntarsiaGrid)