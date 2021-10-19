/**
 *
 * @description Footer of pages
 */

import { Link } from "react-router-dom";
import { config } from "../../config";
import { paths } from "../navbar/paths";
import Styles from "./style.module.css";
export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div>
        <Link to="/" className={Styles.title}>
          {config.appName}
        </Link>
        <ul className={Styles.links}>
          {paths.map((_path) => (
            <li key={_path.title}>
              <Link to={_path.path}>{_path.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
