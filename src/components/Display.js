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
        height: `${props.height ? props.height : "30vh"}`,
        backgroundColor: "#A1B57D",
        textAlign: "right",
        borderRadius: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10px",
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
            fontSize: `${props.landscape ? "5vh" : "15px"}`,
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: `${props.landscape ? "0px" : "15px"}`,
            border: "2px solid black",
            height: `${props.landscape ? "10vh" : "5vh"}`,
            width: `${props.landscape ? "10vh" : "5vh"}`,
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
          margin: 0,
        }}
      >
        {props.data.numberA + "  "}&nbsp;
        {props.data.sign !== "" ? props.data.sign : ""}&nbsp;
        {props.data.numberB !== "" ? props.data.numberB : ""}&nbsp;
      </h2>
      <h3
        style={{
          fontSize: `${props.height ? props.height / 0.8 : "10vh"}`,
          marginRight: "20px",
          marginTop: "2vh",
        }}
      >
        {props.data.answer}
      </h3>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
