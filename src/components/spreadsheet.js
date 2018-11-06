import config from "../config";

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

export function write(
  callback,
  date = "",
  time = "",
  email = "отсутствует",
  messenger = "отсутствует",
  phone = "отсутствует",
  Experience = "",
  levelLan = "",
  periodWork = ""
) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: config.spreadsheetId,

        range: "Sheet1!A4:T",
        // valueRenderOption: "UNFORMATTED_VALUE",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [
              date,
              time,
              email,
              messenger,
              phone,
              Experience,
              levelLan,
              periodWork
            ]
          ]
        }
      })
      .then(
        response => {
          callback(true, response.result.values);
          // console.log("data", data);
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
