export function calculate() {
  return { type: "calculate" };
}

export function sign(value) {
  return { type: "SIGN", value };
}

export function number(value) {
  return { type: "NUMBER", value };
}
