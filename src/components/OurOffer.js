import React, { Component } from "react";
import { Btn } from "./Btn";

export class OurOffer extends Component {
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
      <div className="card w-75 p-5">
        <div className="title">
          Мы предлагаем следующие условия: фиксированный оклад в размере 200$ в
          месяц за полный рабочий день и выполнение минимальной ежедневной нормы
          звонков в размере 150 минут в линии. Премия оставляет от 20 до 150% от
          оклада, в зависимости от ваших показателей. Средняя зарплата
          составляет 300-350$. Вас устраивает наше предложение?
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
          {Btn(this.state.isFalure, "/botquery/Congartiluation")}
        </div>
      </div>
    );
  }
}
