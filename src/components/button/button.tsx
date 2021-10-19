/**
 * @description Button Component
 */

import { FC, ButtonHTMLAttributes } from "react";
import Styles from "./style.module.css";

export const Button: FC<ButtonType> = (props) => {
  return (
    <button className={`${Styles.button} ${props.className}`} {...props}>
      {props.children}
    </button>
  );
};

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {}
