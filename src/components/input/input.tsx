/**
 * @description Input Component
 */

import { FC, InputHTMLAttributes } from "react";
import Styles from "./style.module.css";

export const Input: FC<InputType> = (props) => {
  return <input className={`${Styles.input} ${props.className}`} {...props} />;
};

interface InputType extends InputHTMLAttributes<HTMLInputElement> {}
