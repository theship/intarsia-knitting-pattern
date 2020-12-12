import * as React from "react";
import { ColorPickerContainer } from "./ColorPickerContainer";
import '../styles/css/styles.css';
import { Row, Col } from 'react-bootstrap';
const BSContainer = React.lazy(() => import('react-bootstrap/Container'));

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
      { props.row.map(id => <Cell id={String(id)} />)}
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

  function handleClick(event) {
/*     const Picker = ColorPickerContainer.useContainer();
    const activeColor = Picker.color;
 */
    var ts = event.currentTarget.style
    ts.backgroundColor = (ts.backgroundColor === 'white' ? { activeColor } : 'white')
  }

  return (
    <div
      onClick={handleClick}
      id={props.id}
      style={cellStyles}
    />
  );
}


class IntarsiaGrid extends React.Component {

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      grid: this.buildGrid()
    }
  }

  buildGrid() {
    var grid = [];
    for (let i: number = 0; i < gridDim.x; i++) {
      grid.push([]);
      for (let j: number = 0; j < gridDim.y; j++) {
        grid[i].push([i, j]);
      }
    }
    return grid;
  }

  render() {
    return (
        <BSContainer>
          {this.state.grid.map(row => <GridRow row={row} />)}
        </BSContainer>
    );
  }
}

export default IntarsiaGrid;
