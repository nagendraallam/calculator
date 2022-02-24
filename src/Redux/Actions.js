export function calculate() {
  return { type: "calculate" };
}

export function sign(value) {
  return { type: "SIGN", value };
}

export function number(value) {
  return { type: "NUMBER", value };
}

export function clear() {
  return { type: "CLEAR" };
}

export function decimal() {
  return { type: "DECIMAL" };
}
