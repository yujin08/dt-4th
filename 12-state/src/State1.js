import React, { Component } from 'react';

export default class State1 extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>Count: {count}</h1>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 2 });
          }}
        >
          + 2
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          - 1
        </button>
      </>
    );
  }
}
