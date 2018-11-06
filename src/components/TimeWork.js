import React, { Component } from "react";
import { Btn } from "./Btn";
import { connect } from "react-redux";

const text = ["6 - 8 часов", "Более 8 часов"];

class TimeWork extends Component {
  constructor(props) {
    super(props);
    this.state = { isFalure: true };
  }
  change = e => {
    this.setState({
      isFalure: false
    });
    this.props.timeWork(e.target.value);
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
            Сколько времени в день вы готовы посвятить работе?
          </div>
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
                До 4 часов
              </label>
            </div>

            <div
              onChange={this.nochange}
              className="custom-control custom-radio"
            >
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
            {Btn(this.state.isFalure, "/botquery/Experience")}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    timeWork: state
  }),
  dispatch => ({
    timeWork: timework => {
      dispatch({ type: "PERIOD_WORK", payload: timework });
    }
  })
)(TimeWork);
