function solve(sign, number, answer) {
  console.log(sign, number, answer);
  if (sign === "+") {
    return (Number(answer) + Number(number)).toFixed(2);
  } else if (sign === "-") {
    return (Number(answer) - Number(number)).toFixed(2);
  } else if (sign === "X") {
    return (Number(answer) * Number(number)).toFixed(2);
  } else if (sign === "/") {
    return (Number(answer) / Number(number)).toFixed(2);
  }
}

export { solve };
