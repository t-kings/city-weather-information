/**
 * @description Loader component
 */

import { FC } from "react";
import Styles from "./styles.module.css";

export const Loader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles.loader}></div>
      </div>
    </div>
  );
};
