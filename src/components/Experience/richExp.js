import React, { Fragment } from "react";

export const richExp = () => {
  return (
    <Fragment>
      <div className="sub">
        Учитывая ваш богатый опыт, у нас есть для вас более интересная вакансия,
        вы готовы ее рассмотреть?
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          id="defaultUnchecked1"
          name="defaultExampleRadios21"
          defaultChecked
        />
        <label className="custom-control-label" htmlFor="defaultUnchecked1">
          Да
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          id="defaultChecked1"
          name="defaultExampleRadios21"
        />
        <label className="custom-control-label" htmlFor="defaultChecked1">
          Нет
        </label>
      </div>
    </Fragment>
  );
};
