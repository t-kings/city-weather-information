/**
 * @description Textarea Component
 */

import { FC, TextareaHTMLAttributes } from "react";
import Styles from "./style.module.css";

export const Textarea: FC<TextareaType> = (props) => {
  return (
    <textarea className={`${Styles.textarea} ${props.className}`} {...props} />
  );
};

interface TextareaType extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
