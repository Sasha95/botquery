import { combineReducers } from "redux";
import levelLan from "./levelLan";
import periodWork from "./period";
import timeWork from "./timeWork";
import Experience from "./expir";
import date from "./date";
import time from "./time";

const rootReducer = combineReducers({
  levelLan,
  periodWork,
  timeWork,
  Experience,
  date,
  time
});

export default rootReducer;
