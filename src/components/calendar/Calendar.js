import React, { Component } from "react";
import "../test.scss";
import ReactGoogleSheets from "react-google-sheets";
import { borderShowCalendar } from "./showingData";
import { Time } from "./time";
import config from "../../config";
import { load, write } from "../spreadsheet";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchData } from "../action";

const dayOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetLoaded: false,
      currentArrayData: [],
      data: new Date(),
      timeFromExcel: [],
      clickdata: ""
    };
  }

  setDate = () => {
    this.setState({
      currentArrayData: borderShowCalendar(
        this.state.data.getFullYear(),
        this.state.data.getMonth() + 1
      )
    });
  };

  componentDidMount() {
    this.setDate();
  }
  getDataFromNet = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        load(this.onLoad);
      });
  };
  setDataToNet = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        write(this.onLoad);
      });
  };

  onLoad = (isRequest, data) => {
    console.log(isRequest, data);
    console.log("click", this.state.clickdata);
    let artime = [];
    if (isRequest && data.length !== 0) {
      data.map(x => (x[0] === this.state.clickdata ? artime.push(x[1]) : null));
    }
    this.setState({
      timeFromExcel: artime.filter(function(obj) {
        return Time().indexOf(obj) >= 0;
      })
    });
  };
  addData = () => {
    this.props.getSheetsData({ YOUR_SPREADSHEET_NAME: "Sheet1" });
    this.props.updateCell(
      "Sheet1", // sheetName
      "E", // column
      13, // row
      "Apple", // value
      null, // successCallback
      error => {
        console.log("error", error);
      } // errorCallback
    );
  };

  monthUP = () => {
    this.setState(
      {
        data: new Date(this.state.data.setMonth(this.state.data.getMonth() + 1))
      },
      this.setDate()
    );
  };

  monthDOWN = () => {
    this.setState(
      {
        data: new Date(this.state.data.setMonth(this.state.data.getMonth() - 1))
      },
      this.setDate()
    );
  };

  clickDay = event => {
    console.log(event.target.getAttribute("id"));
    this.props.fetchData();

    // this.setState(
    //   { clickdata: event.target.getAttribute("id") },
    //   window.gapi.load("client", this.getDataFromNet)
    // );
  };

  clickTime = event => {
    console.log(event.target.getAttribute("id"));
    window.gapi.load("client", this.getDataFromNet);
  };

  afterLoading = () => {
    const brTime = this.props.getSheetsData({
      YOUR_SPREADSHEET_NAME: "Sheet1"
    });

    console.log(brTime);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <ReactGoogleSheets
          clientId={
            "920801246629-o5oli34pl2jo3ur2plph66to2acni896.apps.googleusercontent.com"
          }
          apiKey={"AIzaSyAuTv17FnWSQeXcr_AlFYBZcrJ6wsEyCoE"}
          spreadsheetId={"1Krdol9st8XaugOEdHByud5bvBhy1CrmREHoE8-Ipnbc"}
          afterLoading={this.afterLoading}
        />
        {this.state.currentArrayData !== [] ? (
          <main className="calendar-contain">
            <div className="calendar__sidebar">
              <div className="sidebar__nav">
                <span onClick={this.monthDOWN} className="sidebar__nav-item">
                  <img
                    className="icon icons8-Up"
                    alt=""
                    width="22px"
                    height="22px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVRYR+3VwQ2DMAyF4Z8NOkI36AodpZ2sjMAoHaWdoJWlIEXI4RHnwMWROAH2ZxuSiZPXdHJ+EjDagUcZ4Rwd5QjAkr9K4icQQkQBdfK1+BAiAvCShxG9gG3b6xGExtED8Gb+K6VbnNA3cRTQCl4DzNKNOALYC7oFdCMUQFXkAboQCvAGbkDrF2sBasQXuAIfb7NSgAtwB5bGTrcHWBFWhF3uUgC1wyqAen/4NExAdiA7kB3IDmQH5GGjHhg9DVV8eT8Bf2HqNiEP+isaAAAAAElFTkSuQmCC"
                  />
                </span>
                <span onClick={this.monthUP} className="sidebar__nav-item">
                  <img
                    className="icon icons8-Down"
                    alt=""
                    width="22px"
                    height="22px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4UlEQVRYR+2WgQnCMBBFXzdwBSdwBUfRyXQER3EUN1AOEgnxLrkkhYCkUFpI7/+Xf1fajcnHNtmfBTCawDu0sFunuzAYL4CVwEpgJbAS+P8EDsAZeBj/DbUELsAznKpE7WMkxSfgCtwVhRKAmN+AF3AM1x+JGkAUkUINwgKo1X1BagDyYElMA3Cbi7gHoASRAzSZtwBYEClAs3krgAYhQxbnI73XBrbrLdCK0p3m69bbYv79e2cgF9Agms17WpCCdPU830lvAlFHIORw93xvALO33oXRBLw+uw/hsHEUmJ7ABzErNiGyzfJcAAAAAElFTkSuQmCC"
                  />
                </span>
              </div>
              <h3 className="sidebar__heading">
                {monthNames[this.state.data.getMonth()] +
                  "  " +
                  this.state.data.getFullYear()}
              </h3>
              <ul className="sidebar__list">
                {Time().map((x, index) => (
                  <li
                    onClick={this.clickTime}
                    id={x}
                    key={index}
                    className="sidebar__list-item"
                  >
                    <span
                      id={x}
                      className={`list-item__time ${
                        this.state.timeFromExcel.indexOf(x) !== -1
                          ? "sidebar__list-item--complete"
                          : ""
                      }`}
                    >
                      {x}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <section className="calendar__days">
              <section className="calendar__top-bar">
                {dayOfWeek.map((day, index) => (
                  <span key={index} className="top-bar__days">
                    {day}
                  </span>
                ))}
              </section>

              {this.state.currentArrayData.map(
                (x, i) =>
                  x.length !== 0 ? (
                    <section key={i} className="calendar__week">
                      {x.map(
                        (d, j) =>
                          (j + 1) % 6 === 0 || (j + 1) % 7 === 0 ? (
                            <div key={j} className="calendar__day inactive">
                              <span
                                id={d.day + "." + d.month + "." + d.year}
                                className="calendar__date"
                              >
                                {d.day}
                              </span>
                            </div>
                          ) : (
                            <div key={j} className="calendar__day">
                              <span
                                onClick={this.clickDay}
                                id={d.day + "." + d.month + "." + d.year}
                                className="calendar__date"
                              >
                                {d.day}
                              </span>
                            </div>
                          )
                      )}
                    </section>
                  ) : (
                    ""
                  )
              )}
            </section>
          </main>
        ) : (
          ""
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.appData.isFetching,
    data: state.appData.data,
    store: state
  };
}

export default compose(
  connect(
    mapStateToProps,
    { fetchData }
  )(ReactGoogleSheets.connect(Calendars))
);
