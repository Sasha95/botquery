import { load, write } from "../spreadsheet";
import config from "../../config";

export const getDataFromExcel = () => {
  // 2. Initialize the JavaScript client library.
  window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      // 3. Initialize and make the API request.
      return load();
    });
};

export const setDataToExcel = data => {
  // 2. Initialize the JavaScript client library.
  window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      // 3. Initialize and make the API request.
      write(this.onLoad);
    });
};
