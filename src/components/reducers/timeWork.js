const initialState = {
  timework: ""
};

export default function timeWork(state = initialState, action) {
  if (action.type === "TIME_WORK") {
    return action.payload;
  }

  return state;
}
