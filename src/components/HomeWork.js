import React, { Component } from "react";
import { Btn } from "./Btn";

export class HomeWork extends Component {
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
      <div className="parent">
        <div className="card p-4">
          <div className="title">Готовы ли вы работать из дома/удаленно?</div>
          <div className="card-body p-0">
            <div onChange={this.change} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
                defaultChecked
              />
              <label
                className="custom-control-label"
                htmlFor="defaultUnchecked"
              >
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
            {Btn(this.state.isFalure, "/botquery/StableInternet")}
          </div>
        </div>
      </div>
    );
  }
}
