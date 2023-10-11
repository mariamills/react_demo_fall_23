import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {
  // in order to use state, we need to use a constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      coffee: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://random-data-api.com/api/coffee/random_coffee')
      .then((response) => {
        console.log(response);
        this.setState({ coffee: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { coffee } = this.state;
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
        <p>{coffee.blend_name}</p>
      </div>
    );
  }
}

export default Body;
