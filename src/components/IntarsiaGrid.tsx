import * as React from "react";
import '../styles/css/styles.css';
import { Container, Row } from 'react-bootstrap';
import { ColorPickerContainer } from "./ColorPickerContainer";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

/* // Generic Input Type
function wrapInArray<Type>(input: Type): Type[] {
  return [input];
}
 */
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
  const picker = ColorPickerContainer.useContainer();

  function handleClick(event:any) {

    var targetStyle = event.currentTarget.style
    
    targetStyle.backgroundColor = (targetStyle.backgroundColor === 'white' ? picker.color : 'white')
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
      <Container>
        {this.state.grid.map(row => <GridRow row={row} />)}
      </Container>
    );
  }
  /*   SumptinGood: String = "";
  
    tellMeSometinGood = (SumptinGood) => {
      console.log("doSomething: ", SumptinGood);
    }
  
    render() {
      return (<button onClick={() => this.tellMeSometinGood("Heh...")}>Click Me</button>)
    }
   */

}

export default IntarsiaGrid;