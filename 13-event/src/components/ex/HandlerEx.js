import React, { Component } from 'react';

export default class HandlerEx extends Component {
  state = { message: 'Hello World!' };

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        <button
          onClick={() => {
            this.setState({ message: 'Goodbye World!' });
          }}
        >
          클릭
        </button>
      </>
    );
  }
}
