import React, { Component } from "react";
import cityData from "./data";

class CityInfo extends Component {
  render() {
    return (
      <div>
        <h1>{cityData.name}</h1>
        <p>Country: {cityData.country}</p>
        <p>Foundation Year: {cityData.foundationYear}</p>
        <h2>Landmarks:</h2>
        <ul>
          {cityData.landmarks.map((landmark, index) => (
            <li key={index}>{landmark}</li>
          ))}
        </ul>
        <h2>Images:</h2>
        <ul>
          {cityData.ims.map((im, index) => (
            <li key={index}>
            <img src={im}/>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CityInfo;

