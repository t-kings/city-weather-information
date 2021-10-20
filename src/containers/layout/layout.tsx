/**
 * @description Layout for pages
 */

import { FC } from "react";
import { Footer, Navbar } from "../../components";
import useScrollToTop from "../../hooks/useScrollToTop";

export const PageLayout: FC = ({ children }) => {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
