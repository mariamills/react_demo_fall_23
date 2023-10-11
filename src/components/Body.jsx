import React, { Component } from 'react';

class Body extends Component {
  // in order to use state, we need to use a constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Body</h1>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Body;
