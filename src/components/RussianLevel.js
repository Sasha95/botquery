import React, { Component } from "react";
import { Btn } from "./Btn";
import { connect } from "react-redux";

const text = [
  "Владею в совершенстве, легко и грамотно формирую речь",
  "Уверенно общаюсь, грамотно формирую речь",
  "Хорошо общаюсь, умею выстроить диалог"
];

class RussianLevel extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: false };
    this.props.levelLang(
      "Владею в совершенстве, легко и грамотно формирую речь"
    );
  }
  change = e => {
    this.setState({
      isFalure: false
    });
    this.props.levelLang(e.target.value);
  };
  nochange = () => {
    this.setState({
      isFalure: true
    });
  };
  render() {
    return (
      <div className="parent">
        <div className="card p-4">
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
                value={text[0]}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultGroupExample1"
              >
                {text[0]}
              </label>
            </div>

            <div onChange={this.change} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultGroupExample2"
                name="groupOfDefaultRadios"
                value={text[1]}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultGroupExample2"
              >
                {text[1]}
              </label>
            </div>

            <div onChange={this.change} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultGroupExample3"
                name="groupOfDefaultRadios"
                value={text[2]}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultGroupExample3"
              >
                {text[2]}
              </label>
            </div>
            <div
              onChange={this.nochange}
              className="custom-control custom-radio"
            >
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
      </div>
    );
  }
}

export default connect(
  state => ({
    levelRus: state
  }),
  dispatch => ({
    levelLang: level => {
      dispatch({ type: "LEVEL_LANGUAGE", payload: level });
    }
  })
)(RussianLevel);
