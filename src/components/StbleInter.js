import React, { Component } from "react";
import { Btn } from "./Btn";

export class StbleInter extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: false };
  }
  change = () => {
    this.setState({
      isFalure: !this.state.isFalure
    });
  };
  render() {
    return (
      <div className="card w-50 p-4 w-50">
        <div className="title">
          Вам для этого потребуются: стабильный интернет, компьютер или ноутбук,
          наушники, личное пространство где вы сможете работать без посторонних
          шумов - вы располагаете всем необходимым?
        </div>
        <div onChange={this.change} className="card-body p-0">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultUnchecked"
              name="defaultExampleRadios"
              defaultChecked
            />
            <label className="custom-control-label" htmlFor="defaultUnchecked">
              Да
            </label>
          </div>
          <div onChange={this.change} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultChecked"
              name="defaultExampleRadios"
            />
            <label className="custom-control-label" htmlFor="defaultChecked">
              Нет
            </label>
          </div>
          {Btn(this.state.isFalure, "/botquery/RussianLevel")}
        </div>
      </div>
    );
  }
}
