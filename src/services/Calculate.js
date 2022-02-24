function solve(sign, number, answer) {
  if (sign === "+") {
    return Number(answer) + Number(number);
  } else if (sign === "-") {
    return Number(answer) - Number(number);
  } else if (sign === "x") {
    return Number(answer) * Number(number);
  } else if (sign === "/") {
    return Number(answer) / Number(number);
  }
}

export { solve };
