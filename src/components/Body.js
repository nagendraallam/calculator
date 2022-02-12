import React from "react";
import DisplayButtons from "../services/DisplayButtons";
export default function Body() {
  return (
    <div style={{ height: "70vh", width: "100vw" }}>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tbody>
          <DisplayButtons buttonHeight={`${70 / 4}vh`} buttonWidth={"25vw"} />
        </tbody>
      </table>
    </div>
  );
}
