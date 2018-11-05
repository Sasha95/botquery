import config from "../config";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from "./constans";

export function getData() {
  return {
    type: FETCHING_DATA
  };
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  };
}

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A4:T",
        valueRenderOption: "UNFORMATTED_VALUE"
      })
      .then(
        response => {
          callback(true, response.result.values);
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

export function write(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: config.spreadsheetId,

        range: "Sheet1!A4:T",
        // valueRenderOption: "UNFORMATTED_VALUE",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [["Void", "Canvas", "Website"], ["Paul", "Shan", "Human"]]
        }
      })
      .then(
        response => {
          const data = response.result.values;
          callback(true, data);
          // console.log("data", data);
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
