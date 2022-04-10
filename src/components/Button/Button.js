import React from "react";
import s from "./Button.module.css";

const Button = () => {
  return (
    <button type="button" className={s.button}>
      Load more
    </button>
  );
};

//describe props
export default Button;
