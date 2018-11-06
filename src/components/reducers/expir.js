const initialState = {
  exp: ""
};

export default function Experience(state = initialState, action) {
  if (action.type === "EXPERIENCE") {
    return action.payload;
  }

  return state;
}
