import React, { Component } from "react";
import "../test.scss";
import ReactGoogleSheets from "react-google-sheets";
import { borderShowCalendar } from "./showingData";
import { Time } from "./time";
import config from "../../config";
import { load } from "../spreadsheet";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "react-loader-spinner";

const dayOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт"];
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
      clickdata: "",
      isFetch: false,
      currentSelectDate: String(
        new Date().getDate() +
          "." +
          Number(new Date().getMonth() + 1) +
          "." +
          new Date().getFullYear()
      ),
      currentSelectTime: ""
    };
  }

  setDate = () => {
    this.setState(
      {
        currentArrayData: borderShowCalendar(
          this.state.data.getFullYear(),
          this.state.data.getMonth() + 1
        )
      },
      window.gapi.load("client", this.getDataFromNet)
    );
    const date =
      this.state.data.getDate() +
      "." +
      Number(this.state.data.getMonth() + 1) +
      "." +
      this.state.data.getFullYear();
    this.setState(
      {
        clickdata: date
      },
      this.props.date(date)
    );
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

  onLoad = (isRequest, data) => {
    let artime = [];

    if (data !== undefined && isRequest && data.length !== 0) {
      data.map(x => (x[0] === this.state.clickdata ? artime.push(x[1]) : null));
    }

    this.setState({
      timeFromExcel: artime.filter(function(obj) {
        return Time().indexOf(obj) >= 0;
      })
    });
    this.setState({ isFetch: true });
  };
  monthUP = () => {
    this.setState(
      {
        data: new Date(
          this.state.data.setMonth(this.state.data.getMonth() + 1)
        ),
        currentSelectDate: "",
        currentSelectTime: ""
      },
      this.setDate()
    );
    this.props.date("");
  };

  monthDOWN = () => {
    this.setState(
      {
        data: new Date(
          this.state.data.setMonth(this.state.data.getMonth() - 1)
        ),
        currentSelectDate: "",
        currentSelectTime: ""
      },
      this.setDate()
    );
    this.props.date("");
  };

  clickDay = event => {
    this.setState({
      currentSelectDate: event.target.id
    });
    this.setState({ isFetch: false });
    this.setState(
      { clickdata: event.target.getAttribute("id") },
      this.getDataFromNet()
    );
    this.props.date(event.target.getAttribute("id"));
    this.props.Time({});
  };

  clickTime = event => {
    this.setState({
      currentSelectTime: event.target.id
    });
    this.props.Time(event.target.getAttribute("id"));
    window.scrollTo(0, document.body.scrollHeight);
  };

  afterLoading = () => {
    this.props.getSheetsData({
      YOUR_SPREADSHEET_NAME: "Sheet1"
    });
  };

  render() {
    return (
      <>
        <ReactGoogleSheets
          clientId={config.clientId}
          apiKey={config.apiKey}
          spreadsheetId={config.spreadsheetId}
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
                {this.state.isFetch === true && this.props.data.date !== "" ? (
                  Time().map((x, index) => (
                    <li
                      onClick={
                        this.state.timeFromExcel.indexOf(x) === -1
                          ? this.clickTime
                          : null
                      }
                      id={x}
                      key={index}
                      className="sidebar__list-item"
                    >
                      <span
                        id={x}
                        className={`list-item__time ${
                          this.state.timeFromExcel.indexOf(x) !== -1
                            ? "sidebar__list-item--complete"
                            : this.state.currentSelectTime === x
                              ? "selected"
                              : ""
                        }`}
                      >
                        {x}
                      </span>
                    </li>
                  ))
                ) : this.props.data.date !== "" ? (
                  <div className="clen_text">
                    <Loader type="Watch" color="blue" height="90" width="90" />
                  </div>
                ) : (
                  <div className="clen_text">Выберите число</div>
                )}
              </ul>
            </div>

            <section className="calendar__days">
              <section className="calendar__top-bar">
                {dayOfWeek.map((day, index) => (
                  <span key={index} className="top-bar__days">
                    {day}
                  </span>
                ))}
                <span className="top-bar__days d-sm-block d-none">Сб</span>
                <span className="top-bar__days d-sm-block d-none">Вс</span>
              </section>

              {this.state.currentArrayData.map(
                (x, i) =>
                  x.length !== 0 ? (
                    <section key={i} className="calendar__week">
                      {x.map(
                        (d, j) =>
                          (j + 1) % 6 === 0 || (j + 1) % 7 === 0 ? (
                            <div
                              key={j}
                              className="calendar__day inactive d-sm-block d-none"
                            >
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
                                className={`calendar__date ${
                                  this.state.currentSelectDate ===
                                  String(d.day + "." + d.month + "." + d.year)
                                    ? "selected"
                                    : ""
                                }`}
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

export default compose(
  connect(
    state => ({
      data: state,
      time: state
    }),
    dispatch => ({
      date: dat => {
        dispatch({ type: "DATE", payload: dat });
      },
      Time: time => {
        dispatch({ type: "TIME", payload: time });
      }
    })
  )(ReactGoogleSheets.connect(Calendars))
);
