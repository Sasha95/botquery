const initialState = {
  period: ""
};

export default function periodWork(state = initialState, action) {
  if (action.type === "PERIOD_WORK") {
    return action.payload;
  }

  return state;
}
