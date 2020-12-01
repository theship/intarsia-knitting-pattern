import React from 'react';
import logo from './logo.svg';
import './styles/css/styles.css';

import { Container, Row, Col } from 'react-bootstrap';

// let { Grid, Row, Col } = ReactBootstrap;

const
  gridDim = {
    x: 40,
    y: 29
  },
  cellDim = {
    width: '30px',
    height: '20px'
  }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.buildGrid()
    }
  }

  buildGrid() {
    var grid = [];
    for (let i = 0; i < gridDim.x; i++) {
      grid.push([]);
      for (let j = 0; j < gridDim.y; j++) {
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
    var ts = event.currentTarget.style
    ts.backgroundColor = (ts.backgroundColor === 'white' ? 'black' : 'white')
  }

  return (
    <div
      onClick={handleClick}
      id={props.id}
      style={cellStyles}
    />
  );
}

export default App;
