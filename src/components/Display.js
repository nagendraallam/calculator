import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("map", state);
  return {
    data: state,
  };
};

function Display(props) {
  return (
    <div
      style={{
        height: `${props.height ? props.height : "30vh"}`,
        backgroundColor: "blue",
        textAlign: "right",
      }}
    >
      <h2>{props.data.numberA}</h2>
      <h3 style={{ fontSize: `${props.height ? props.height / 0.1 : "25vh"}`,  }}>
        {props.data.answer}
      </h3>
    </div>
  );
}

export default connect(mapStateToProps)(Display);
