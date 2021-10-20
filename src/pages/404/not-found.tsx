/**
 * @description 404 error page
 */

import { Link } from "react-router-dom";
import Styles from "./style.module.css";

export const NotFound = () => {
  return (
    <section className={Styles.notFound}>
      <h1>Page not found.</h1>
      <Link to="/">Go Home</Link>
    </section>
  );
};
