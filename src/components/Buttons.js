import React from "react";
import { connect } from "react-redux";
import { calculate, number, sign } from "../Redux/Actions";

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
    <div>
      <button
        id={props.text}
        style={{
          border: "none",
          backgroundColor: `${props.bg ? props.bg : "white"}`,
          fontSize: "3vw",
          cursor: "pointer",
          height: `${props.height ? props.height : "100px"}`,
          width: `${props.width ? props.width : "100px"}`,
        }}
        onClick={() => {
          //switch between sign and number
          if (props.text == "1") {
            props.number(props.text);
          } else if (props.text == "2") {
            props.number(props.text);
          } else if (props.text == "3") {
            props.number(props.text);
          } else if (props.text == "4") {
            props.number(props.text);
          } else if (props.text == "5") {
            props.number(props.text);
          } else if (props.text == "6") {
            props.number(props.text);
          } else if (props.text == "7") {
            props.number(props.text);
          } else if (props.text == "8") {
            props.number(props.text);
          } else if (props.text == "9") {
            props.number(props.text);
          } else if (props.text == "0") {
            props.number(props.text);
          } else if (props.text == ".") {
            props.number(props.text);
          } else if (props.text == "+") {
            props.sign(props.text);
          } else if (props.text == "-") {
            props.sign(props.text);
          } else if (props.text == "X") {
            props.sign(props.text);
          } else if (props.text == "/") {
            props.sign(props.text);
          } else if (props.text == "=") {
            props.calculate();
          }
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
