import React from "react";
import { connect } from "react-redux";
import { clear } from "../Redux/Actions";

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => dispatch(clear()),
  };
};

function Display(props) {
  return (
    <div
      style={{
        height: `${props.landscape ? "30vh" : "40vh"}`,
        backgroundColor: "#A1B57D",
        display: "flex",
        textAlign: "right",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",

          height: `${props.height ? props.height : "30vh"}`,
        }}
      >
        <button
          className="shrink"
          style={{
            marginLeft: "10px",
            background: "transparent",
            border: "none",
            fontSize: `${props.landscape ? "10vh" : "15px"}`,
            cursor: "pointer",
            backgroundColor: "white",
            border: "2px solid black",
            borderRadius: `${props.landscape ? "50%" : "5px"}`,
            height: `${props.landscape ? "20vh" : "5vh"}`,
            width: `${props.landscape ? "20vh" : "5vh"}`,
          }}
          onClick={() => {
            props.clear();
          }}
        >
          X
        </button>
      </div>
      <h2
        style={{
          fontSize: `${props.height ? props.height / 0.8 : "5vh"}`,
        }}
      >
        {props.data.numberA + "  "}&nbsp;
        {props.data.sign !== "" ? props.data.sign + "  " : ""}
        {props.data.numberB !== "" ? props.data.numberB + "  " : ""}
      </h2>
      <h3
        style={{
          fontSize: `${props.height ? props.height / 0.8 : "10vh"}`,
          marginBottom: "5vh",
        }}
      >
        {props.data.answer}
      </h3>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
