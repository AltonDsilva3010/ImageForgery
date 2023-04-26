import "./App.css";
import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// import { loadLayersModel } from "@tensorflow/tfjs";
// import model2 from "./models/model.json";
function App() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const loadedModel = await tf.loadLayersModel("model.json");
      console.log("Hello");
      console.log(loadedModel);
      setModel(loadedModel);
    }
    loadModel();
  }, []);

  // useEffect(() => {
  //   console.log(model);
  // }, [model]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {model ? (
        <div>{JSON.stringify(model)}</div>
      ) : (
        <div>
          <h2>No model</h2>
        </div>
      )}
    </div>
  );
}

export default App;
