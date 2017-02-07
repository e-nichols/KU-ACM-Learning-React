import React, { Component } from 'react';

export default class ClickCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Click me! Number of Clicks: {this.state.count}</button>
    )
  }
}
