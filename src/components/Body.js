import React from "react";
import DisplayButtons from "../services/DisplayButtons";
export default function Body() {
  return (
    <div style={{ height: "70vh", width: "100vw" }}>
      <table
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          height: "70vh",
        }}
      >
        <tbody>
          <DisplayButtons buttonHeight={70 / 4} buttonWidth={25} />
        </tbody>
      </table>
    </div>
  );
}
