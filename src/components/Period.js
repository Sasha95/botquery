import React, { Component } from "react";
import { Btn } from "./Btn";
import { connect } from "react-redux";

const text = ["От 6 месяцев до 1 года", "Более года"];

class Period extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: true };
  }

  change = e => {
    this.setState({
      isFalure: !this.state.isFalure
    });
    this.props.PeriodWork(e.target.value);
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
          <div className="title">На какой период времени вы ищете работу?</div>

          <div className="card-body p-0">
            <div
              onChange={this.nochange}
              className="custom-control custom-radio"
            >
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
                value={text[0]}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultGroupExample3"
              >
                {text[0]}
              </label>
            </div>
            <div onChange={this.change} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultGroupExample4"
                name="groupOfDefaultRadios"
                value={text[1]}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultGroupExample4"
              >
                {text[1]}
              </label>
            </div>
            {Btn(this.state.isFalure, "/botquery/TimeWork")}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    periodWork: state
  }),
  dispatch => ({
    PeriodWork: period => {
      dispatch({ type: "PERIOD_WORK", payload: period });
    }
  })
)(Period);
