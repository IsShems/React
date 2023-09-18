import React from "react";
import cityData from "./data";

function CityInfo() {
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
      <div>
        {cityData.ims.map((im, index) => (
          <li key={index}>
            <img src={im}/>
          </li>
        ))}
      </div>
    </div>
  );
}

export default CityInfo;
