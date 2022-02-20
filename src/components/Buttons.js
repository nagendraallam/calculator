import React from "react";
import { connect } from "react-redux";
import { calculate, number, sign } from "../Redux/Actions";
import "../styles/buttons.css";
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sign: (value) => dispatch(sign(value)),
    number: (value) => dispatch(number(value)),
    calculate: () => dispatch(calculate()),
  };
};

function Buttons(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${props.height ? props.height + "px" : "100px"}`,
        width: `${props.width ? props.width + "vw" : "100px"}`,
      }}
    >
      <button
        className="shrink"
        id={props.text}
        style={{
          hover: "transform(scale(0.8))",
          border: "2px solid black",
          boxShadow: " 5px 10px #888888",
          backgroundColor: `${props.bg ? props.bg : "white"}`,
          fontSize: "3vh",
          cursor: "pointer",
          height: `${props.height ? `${props.height / 2}px` : "100px"}`,
          width: `${props.width ? `${props.width / 2}vh` : "100px"}`,
        }}
        onClick={() => {
          //switch between sign and number
          if (isNaN(Number(props.text)) && props.text !== ".") {
            if (props.text === "=") {
              props.calculate();
            } else {
              props.sign(props.text);
            }
          } else {
            props.number(props.text);
          }
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
