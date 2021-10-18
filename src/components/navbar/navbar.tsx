/**
 * Navigation bar
 */

import { Link } from "react-router-dom";
import { config } from "../../config";
import { paths } from "./paths";

export const Navbar = () => {
  return (
    <nav>
      <h1>{config.appName}</h1>
      <ul>
        {paths.map((_path) => (
          <li key={_path.title}>
            <Link to={_path.path}>{_path.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
