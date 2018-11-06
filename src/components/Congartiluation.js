import React, { Component } from "react";
import Calendars from "./calendar/Calendar";
import { connect } from "react-redux";
import config from "../config";
import { write } from "./spreadsheet";
import { Success } from "../components/Success";
import Loader from "react-loader-spinner";
class Congartiluation extends Component {
  state = {
    email: "",
    messenger: "",
    phone: "",
    redirect: false,
    allRight: false,
    isFetch: false
  };

  static getDerivedStateFromProps(props, state) {
    const { date, time } = props.state;
    const { email, messenger, phone } = state;
    if (
      email !== "" &&
      (messenger !== "" || phone !== "") &&
      typeof date !== "object" &&
      typeof time !== "object"
    ) {
      return { allRight: true };
    } else {
      return { allRight: false };
    }
  }

  update = () => {
    const { date, time, Experience, levelLan, periodWork } = this.props.state;
    const { email, messenger, phone } = this.state;

    this.setState({
      isFetch: true
    });

    this.setDataToNet(
      date,
      time,
      email,
      messenger,
      phone,
      Experience,
      levelLan,
      periodWork
    );
  };

  setDataToNet = (
    date,
    time,
    email,
    messenger,
    phone,
    Experience,
    levelLan,
    periodWork
  ) => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        write(
          this.onLoad,
          date,
          time,
          email,
          messenger,
          phone,
          Experience,
          levelLan,
          periodWork
        );
      });
  };

  onLoad = (isRequest, data) => {
    if (isRequest) {
      this.setState({ redirect: true });
    }
  };

  check = e => {
    if (!e.target.className.includes("invalid"))
      this.setState({ email: e.target.value });
  };

  mes = e => {
    this.setState({ messenger: e.target.value });
  };
  phone = e => {
    this.setState({ phone: e.target.value });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) return <Success />;
    if (this.state.isFetch)
      return (
        <>
          <div className="parent adv">
            <Loader type="Triangle" color="green" height="100" width="100" />
          </div>
        </>
      );

    return (
      <div className="container">
        <div className="title w-100 congratula" style={{ textAlign: "center" }}>
          Поздравляем! Вы успешно прошли онлайн собеседование. Выберите удобное
          для вас время для прохождения интервью и записи на обучение
        </div>

        <div className="row mail ml-0 w-50">
          <div className="col px-0">
            <div className="md-form">
              <i className="fa fa-envelope prefix" />
              <input
                type="email"
                id="inputValidationEx"
                className="form-control validate"
                onBlur={this.check}
              />
              <label
                htmlFor="inputValidationEx"
                data-error="Ошибка"
                data-success="Верно"
              >
                E-mail (обязательное поле)
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Введите телефон и/или мессенджер (Напрмер: Skype: your_skype)
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="md-form">
              <i className="fa fa-commenting-o prefix" aria-hidden="true" />
              <input
                type="text"
                id="inputValidation"
                className="form-control validate"
                onBlur={this.mes}
              />
              <label
                htmlFor="inputValidation"
                data-error="Ошибка"
                data-success="Верно"
              >
                Мессенджер
              </label>
            </div>
          </div>
          <div className="col">
            <div className="md-form">
              <i className="fa fa-phone prefix" aria-hidden="true" />
              <input
                type="number"
                id="inputValidat"
                className="form-control validate"
                onBlur={this.phone}
              />
              <label
                htmlFor="inputValidat"
                data-error="Ошибка"
                data-success="Верно"
              >
                Телефон
              </label>
            </div>
          </div>
        </div>
        <Calendars />
        <br />
        <div className="row d-flex justify-content-center ">
          <button
            onClick={this.state.allRight ? this.update : null}
            type="button mt-2"
            className={`btn button_send mt-3 mb-5 w-50 ${
              this.state.allRight ? "btn-success" : "btn-pink"
            }`}
          >
            {this.state.allRight
              ? "Отправить заявку"
              : "Заполните необходимые поля"}
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  state
}))(Congartiluation);
