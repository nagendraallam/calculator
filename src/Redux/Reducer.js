import { solve } from "../services/Calculate";

const state = {
  answer: "",
  sign: "",
  numberA: "",
  numberB: "",
  isNumberA: true,
};

const Reducer = (_, action) => {
  switch (action.type) {
    case "NUMBER":
      return {
        ...state,
        answer:
          _.answer !== "" && (_.answer === _.numberA || _.answer === _.numberB)
            ? _.answer + action.value
            : action.value,
        numberA: _.isNumberA ? _.numberA + action.value : _.numberA,
        numberB: _.isNumberA ? _.numberB : _.numberB + action.value,
        isNumberA: _.isNumberA ? true : false,
        sign: _.sign,
      };

    case "CLEAR":
      return {
        answer: "",
        sign: "",
        numberA: "",
        numberB: "",
        isNumberA: true,
      };
    case "DECIMAL":
      if (_.isNumberA) {
        if (_.numberA.includes(".")) {
          return _;
        }
        return {
          ..._,
          answer: _.answer + ".",
          numberA: _.numberA + ".",
        };
      } else {
        if (_.numberB.includes(".")) {
          return _;
        }
        return {
          ..._,
          answer: _.answer + ".",
          numberB: _.numberB + ".",
        };
      }

    case "calculate":
      return {
        ...state,
        answer: _.isNumberA ? _.answer : solve(_.sign, _.numberB, _.numberA),
      };
    case "SIGN":
      if (_.isNumberA) {
        if (_.numberA === "") {
          return _;
        } else
          return {
            ...state,
            sign: action.value,
            isNumberA: false,
            numberA: _.answer,
            answer: "",
          };
      } else {
        return {
          ...state,
          sign: action.value,
          answer: "",
          numberA: solve(_.sign, _.numberB, _.numberA),
          numberB: "",
          isNumberA: false,
        };
      }

    default:
      return state;
  }
};
export default Reducer;
