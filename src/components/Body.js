import React, { useEffect } from "react";
import { ButtonLayout } from "../configs";
import "../styles/div.css";
import Buttons from "./Buttons";

export default function Body() {
  const [height, setHeight] = React.useState(window.innerHeight * 0.6);

  return (
    <div
      style={{
        width: "100vw",
        paddingBottom: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      {ButtonLayout.map((_, index) => {
        if (index % 4 === 0) {
          return (
            <div className="rowDiv" key={index}>
              {[1, 2, 3, 4].map((_, i) => {
                return (
                  <Buttons
                    height={height / 4}
                    width={25}
                    text={ButtonLayout[index + i]}
                  />
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
