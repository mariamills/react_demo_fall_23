import React, { Component } from 'react';
import axios from 'axios';

// API key from .env file
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { apod } = this.state;
    return (
      <div className="container p-5 text-center">
        <h1 className="mb-5">🚀Astronomy Picture of the Day (APOD)</h1>
        <div className="row p-5">
          <div className="col-md-6">
            <h2>
              {apod.title} - {apod.copyright}
            </h2>
            <p>{apod.date}</p>
            <p className="mx-auto">{apod.explanation}</p>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid rounded max-height"
              src={apod.url}
              alt={apod.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default APOD;
