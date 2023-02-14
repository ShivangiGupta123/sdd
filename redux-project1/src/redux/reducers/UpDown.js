const initialState = 0;
export const changevalue = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state + action.payload;
    case "DEC":
      return state - action.payload;
    default:
      return state;
  }
};
