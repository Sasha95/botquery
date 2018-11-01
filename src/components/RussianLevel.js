import React, { Component } from "react";
import { Btn } from "./Btn";

export class RussianLevel extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: false };
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
          Оцените свой уровень разговорного русского языка
        </div>
        <div className="card-body p-0">
          <div onChange={this.change} className="custom-control custom-radio">
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
              Владею в совершенстве, легко и грамотно формирую речь
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
              Уверенно общаюсь, грамотно формирую речь
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
              Хорошо общаюсь, умею выстроить диалог
            </label>
          </div>
          <div onChange={this.nochange} className="custom-control custom-radio">
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
              Не плохо общаюсь, испытываю легкие затруднения в построении
              грамотного диалога
            </label>
          </div>
          {Btn(this.state.isFalure, "/botquery/Period")}
        </div>
      </div>
    );
  }
}
