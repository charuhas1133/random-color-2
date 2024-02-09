import { useState } from "react";
import "./App.css";

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function App() {
  const [type, setType] = useState("HEX");
  const [color, setColor] = useState("#ffffff");

  const genrateRamdomHexColor = () => {
    // console.log("click");
    let hexcolorString = "#";
    for (let i = 0; i < 6; i++) {
      hexcolorString += array[Math.floor(Math.random(15) * 15)];
    }
    setColor(hexcolorString);
  };
  const genrateRamdomRGBColor = () => {
    // rgb(243, 124, 124)
    let r = Math.floor(Math.random(256) * 256);
    let g = Math.floor(Math.random(256) * 256);
    let b = Math.floor(Math.random(256) * 256);
    setColor(`rgb(${r},${g},${b})`);
  };
  const changetypeHandler = (data) => {
    setType(data);
    data == "HEX" ? setColor("#ffffff") : setColor("rgb(255, 255, 255)");
  };
  return (
    <>
      <main style={{ backgroundColor: color.length ? color : "" }}>
        <div className="container">
          <h2>Ramdom color</h2>
          <div className="wrapper">
            <div className="item"></div>
            <div className="item">
              <button
                onClick={() => changetypeHandler("HEX")}
                style={{ fontSize: type == "HEX" ? "40px" : "16px" }}
              >
                HEX
              </button>
              <button
                onClick={() => changetypeHandler("RGB")}
                style={{ fontSize: type == "RGB" ? "40px" : "16px" }}
              >
                RGB
              </button>
              <button
                onClick={
                  type == "HEX" ? genrateRamdomHexColor : genrateRamdomRGBColor
                }
              >
                Generate color
              </button>
            </div>
            <div className="item"></div>
          </div>
          <div className="wrapper">
            <div className="item">
              <h2>{color}</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
