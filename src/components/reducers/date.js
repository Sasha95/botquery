const initialState = {
  date: ""
};

export default function date(state = initialState, action) {
  if (action.type === "DATE") {
    return action.payload;
  }

  return state;
}
