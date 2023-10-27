import React, { useState } from 'react';

function Mlpage() {
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("imagefile", file);

      fetch("http://localhost:5500", {
        method: "POST",
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }
  };

  return (
    <div>
      <h1>Image Prediction</h1>
      <input type="file" id="imageUpload" accept="image/*" onChange={handleFileChange} />
      <input type="submit" value="Predict Image" ></input>
      {prediction && <p>Image is a {prediction}</p>}
    </div>
  );
}

export default Mlpage;

