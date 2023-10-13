import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {
  // in order to use state, we need to use a constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      randomData: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://random-data-api.com/api/v2/users')
      .then((response) => {
        this.setState({ randomData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { randomData } = this.state;
    return (
      <div className="m-5">
        <h1>Body</h1>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          {this.state.count}
        </button>
        <img src={randomData.avatar} alt="" />
      </div>
    );
  }
}

export default Body;
