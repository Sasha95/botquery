import React, { Component } from "react";
import { Calendar } from "./Calendar";

export class Congartiluation extends Component {
  render() {
    return (
      <>
        <div className="title w-75">
          Поздравляем! Вы успешно прошли онлайн собеседование. Выберите удобное
          для вас время для прохождения интервью и записи на обучение return{" "}
        </div>
        <Calendar />
      </>
    );
  }
}
