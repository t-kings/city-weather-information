/**
 * Navigation bar
 */

import { Link } from "react-router-dom";
import { config } from "../../config";
import { paths } from "./paths";
import Styles from "./style.module.css";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleNavbar = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    /**
     * * Toggle Navbar for mobile width
     */
    const navBar = document.querySelector("#navbar-links") as HTMLElement;
    if (navBar) {
      if (window.screen.width < 800) {
        navBar.style.transform = isChecked
          ? "translate(0, 0)"
          : "translate(100%, 0)";
      }
    }
  }, [isChecked]);

  useEffect(() => {
    /**
     * Toggle background color on scroll
     */
    const nav = document.querySelector("#navbar") as HTMLElement;

    window.addEventListener("scroll", () => {
      if (nav) {
        nav.style.background = window.scrollY > 100 ? "rgb(32, 0, 34)" : "none";
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className={Styles.nav} id="navbar">
      <div>
        <Link to="/" className={Styles.title}>
          {config.appName}
        </Link>
        <ul className={Styles.links} id="navbar-links">
          {paths.map((_path) => (
            <li key={_path.title}>
              <Link to={_path.path}>{_path.title}</Link>
            </li>
          ))}
        </ul>
        <div className={Styles.toggle}>
          <input type="checkbox" checked={isChecked} onChange={toggleNavbar} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
