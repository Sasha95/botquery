const initialState = {
  time: ""
};

export default function time(state = initialState, action) {
  if (action.type === "TIME") {
    return action.payload;
  }
  return state;
}
