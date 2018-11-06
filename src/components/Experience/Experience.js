import React, { Fragment, Component } from "react";
import { richExp } from "./richExp";
import { Btn } from "../Btn";
import { connect } from "react-redux";

const text = ["До 2 лет", "От 2 до 5 лет", "5 лет и более"];

class Experience extends Component {
  state = {
    isExperience: false,
    moreTwo: false
  };
  yes = () => {
    this.setState({ isExperience: true });
  };
  no = () => {
    this.setState({ isExperience: false, moreTwo: false });
  };
  richyes = e => {
    this.setState({ moreTwo: true });
    this.props.Experience(e.target.value);
  };
  richno = e => {
    this.setState({ moreTwo: false });
    this.props.Experience(e.target.value);
  };
  componentDidMount() {
    this.props.Experience("нет опыта");
  }
  whatExp = () => {
    return (
      <Fragment>
        <div className="sub">Какой у вас опыт работы в продажах?</div>
        <div onChange={this.richno} className="custom-control custom-radio">
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

        <div onChange={this.richyes} className="custom-control custom-radio">
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

        <div onChange={this.richyes} className="custom-control custom-radio">
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
        {this.state.moreTwo ? <div id="exp_2"> {richExp()}</div> : ""}
      </Fragment>
    );
  };
  render() {
    return (
      <div className="parent">
        <div className="card p-4">
          <div className="title">Есть ли у вас опыт работы в продажах?</div>
          <div className="card-body p-0">
            <div onChange={this.yes} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultUnchecked"
                name="defaultExampleRadios"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultUnchecked"
              >
                Да
              </label>
            </div>
            {this.state.isExperience ? (
              <div id="exp_1"> {this.whatExp()}</div>
            ) : (
              ""
            )}
            <div onChange={this.no} className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                id="defaultChecked"
                name="defaultExampleRadios"
                defaultChecked
              />
              <label className="custom-control-label" htmlFor="defaultChecked">
                Нет
              </label>
            </div>
            {Btn(false, "/botquery/OurOffer")}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    exepience: state
  }),
  dispatch => ({
    Experience: exp => {
      dispatch({ type: "EXPERIENCE", payload: exp });
    }
  })
)(Experience);
