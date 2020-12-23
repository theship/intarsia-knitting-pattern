import React, { Component, MouseEvent } from 'react';

const buttonStyle = {
    margin: '10px',
    padding: '10',
    width: '10vw',
    height: '5vh'
}

export class MouseEventButton extends Component {
    /*
     Here we restrict all handleClicks to be exclusively on 
     HTMLButton Elements
    */
    handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert(event.currentTarget.tagName); // alerts BUTTON
    }

    /* 
      Generics support union types. This event handler works on
      HTMLButtonElement and HTMLAnchorElement (links).
    */
    handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        event.preventDefault();
        alert('Yeah!');
    }

    render() {
        return <button onClick={this.handleClick} style={buttonStyle}>
            {this.props.children}
        </button>
    }
}

export default MouseEventButton;
