import React, { Component } from 'react';

class CoolButton extends Component {
  onClick() {
    console.log("You pressed the button.");
  }

  render() {
    return (
      <button style={{background: this.props.color}} onClick={this.onClick}>Click Me and Check the Console</button>
    )
  }
}

export default CoolButton
