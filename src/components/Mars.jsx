import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getRandomPhoto(photos) {
  return photos[Math.floor(Math.random() * photos.length)];
}

function Mars() {
  const [marsRoverPhoto, setMarsRoverPhoto] = useState({});

  // API key from .env file
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
      )
      .then((response) => {
        const photo = getRandomPhoto(response.data.photos);
        setMarsRoverPhoto(photo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="m-5">
      <h1>🛰️Mars Rover Photos</h1>
      <p>Randomly selected photos from NASA's Mars Rover Photos API.</p>
      <div className="container text-center">
        <div className="p-3">
          <h3>
            {marsRoverPhoto.rover && marsRoverPhoto.rover.name} -{' '}
            {marsRoverPhoto.rover && marsRoverPhoto.rover.landing_date}
          </h3>
          <p>Earth Date: {marsRoverPhoto.earth_date}</p>
          <p className="mx-auto">
            Camera: {marsRoverPhoto.camera && marsRoverPhoto.camera.full_name}
          </p>
          <img
            className="img-fluid rounded"
            src={marsRoverPhoto.img_src}
            alt={'Mars Rover Photo id:' + marsRoverPhoto.id}
          />
        </div>
      </div>
    </div>
  );
}

export default Mars;
