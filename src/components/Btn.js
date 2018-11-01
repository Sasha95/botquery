import { Link } from "react-router-dom";
import React from "react";

export const Btn = (isNext, name) => {
  return (
    <Link to={!isNext ? name : "/botquery/Failure"}>
      <button
        style={{ marginTop: "30px" }}
        type="button"
        className="btn btn-primary"
      >
        Продолжить
      </button>
    </Link>
  );
};
