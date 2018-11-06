const initialState = {
  level: ""
};

export default function levelLeng(state = initialState, action) {
  if (action.type === "LEVEL_LANGUAGE") {
    return action.payload;
  }

  return state;
}
