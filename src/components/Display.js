import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

function Display(props) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "10px solid black",
        borderRadius: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        height: `${props.height ? props.height : "30vh"}`,
        backgroundColor: "#A1B57D",
        textAlign: "right",
      }}
    >
      <h2
        style={{
          fontSize: `${props.height ? props.height / 0.8 : "5vh"}`,
          margin: 0,
        }}
      >
        {props.data.numberA + "  "}&nbsp;
        {props.data.sign !== "" ? props.data.sign + "  " : ""}
        {props.data.numberB !== "" ? props.data.numberB + "  " : ""}
      </h2>
      <h3
        style={{
          fontSize: `${props.height ? props.height / 0.3 : "20vh"}`,
          marginTop: "2vh",
        }}
      >
        {props.data.answer}
      </h3>
    </div>
  );
}

export default connect(mapStateToProps)(Display);
