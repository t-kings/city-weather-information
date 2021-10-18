/**
 * @description Layout for pages
 */

import { FC } from "react";
import { Footer, Navbar } from "../../components";

export const PageLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
