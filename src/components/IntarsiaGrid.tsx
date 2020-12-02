import * as React from "react";
import '../styles/css/styles.css';


// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class IntarsiaGrid extends React.Component {
  SumptinGood: String = "";

  tellMeSometinGood = (SumptinGood) => {
    console.log("doSomething: ", SumptinGood);
  }

  render() {
    return (<button onClick={() => this.tellMeSometinGood("Heh...")}>Click Me</button>)
  }
}

export default IntarsiaGrid;
