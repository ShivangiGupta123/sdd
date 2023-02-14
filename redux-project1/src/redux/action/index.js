export const Increment = (num) => {
  return {
    type: "INC",
    payload: num,
  };
};
export const Decrement = (num) => {
  return {
    type: "DEC",
    payload: num,
  };
};
