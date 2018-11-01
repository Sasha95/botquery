import React, { Component } from "react";
import { Btn } from "./Btn";

export class Period extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: true };
  }

  change = () => {
    this.setState({
      isFalure: !this.state.isFalure
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
        <div className="title">На какой период времени вы ищете работу?</div>

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
              До 3 месяцев
            </label>
          </div>

          <div onChange={this.change} className="custom-control custom-radio">
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
              От 3 до 6 месяцев
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
              От 6 месяцев до 1 года
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
              Более года
            </label>
          </div>
          {Btn(this.state.isFalure, "/botquery/TimeWork")}
        </div>
      </div>
    );
  }
}
