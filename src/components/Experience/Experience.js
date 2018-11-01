import React, { Fragment, Component } from "react";
import { richExp } from "./richExp";
import { Btn } from "../Btn";

export class Experience extends Component {
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
  richyes = () => {
    this.setState({ moreTwo: true });
  };
  richno = () => {
    this.setState({ moreTwo: false });
  };

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
          />
          <label
            className="custom-control-label"
            htmlFor="defaultGroupExample1"
          >
            До 2 лет
          </label>
        </div>

        <div onChange={this.richyes} className="custom-control custom-radio">
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
            От 2 до 5 лет
          </label>
        </div>

        <div onChange={this.richyes} className="custom-control custom-radio">
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
            5 лет и более
          </label>
        </div>
        {this.state.moreTwo ? (
          <div style={{ paddingLeft: "50px" }}> {richExp()}</div>
        ) : (
          ""
        )}
      </Fragment>
    );
  };
  render() {
    return (
      <div className="card w-50 p-4 w-50">
        <div className="title">Есть ли у вас опыт работы в продажах?</div>
        <div className="card-body p-0">
          <div onChange={this.yes} className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="defaultUnchecked"
              name="defaultExampleRadios"
            />
            <label className="custom-control-label" htmlFor="defaultUnchecked">
              Да
            </label>
          </div>
          {this.state.isExperience ? (
            <div style={{ paddingLeft: "50px" }}> {this.whatExp()}</div>
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
    );
  }
}
