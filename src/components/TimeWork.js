import React, { Component } from "react";
import { Btn } from "./Btn";

export class TimeWork extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: true };
  }
  change = () => {
    this.setState({
      isFalure: false
    });
  };
  nochange = () => {
    this.setState({
      isFalure: true
    });
  };
  render() {
    return (
      <div className="card w-50 p-4 w-50">
        <div className="title">
          Сколько времени в день вы готовы посвятить работе?
        </div>
        <div className="card-body p-0">
          <div onChange={this.nochange} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultGroupExample1"
              name="groupOfDefaultRadios"
              defaultChecked
            />
            <label
              className="custom-control-label"
              htmlFor="defaultGroupExample1"
            >
              До 4 часов
            </label>
          </div>

          <div onChange={this.nochange} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultGroupExample2"
              name="groupOfDefaultRadios"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultGroupExample2"
            >
              4 - 6 часов
            </label>
          </div>

          <div onChange={this.change} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultGroupExample3"
              name="groupOfDefaultRadios"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultGroupExample3"
            >
              6 - 8 часов
            </label>
          </div>
          <div onChange={this.change} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultGroupExample4"
              name="groupOfDefaultRadios"
            />
            <label
              className="custom-control-label"
              htmlFor="defaultGroupExample4"
            >
              Более 8 часов
            </label>
          </div>
          {Btn(this.state.isFalure, "/botquery/Experience")}
        </div>
      </div>
    );
  }
}
