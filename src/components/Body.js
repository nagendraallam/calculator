import React from "react";
import { ButtonLayout } from "../configs";
import "../styles/div.css";
import Buttons from "./Buttons";

export default function Body(props) {
  console.log(props);
  return (
    <div style={{ width: "100vw", height: `${props.height}` }}>
      {ButtonLayout.map((_, index) => {
        if (index % 4 === 0) {
          return (
            <div className="rowDiv" key={index}>
              {[1, 2, 3, 4].map((_, i) => {
                return (
                  <Buttons
                    height={props.height / 4}
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
