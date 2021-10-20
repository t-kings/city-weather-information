import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    /**
     * * scroll react router hash
     */
    if (hash?.includes("#")) {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash]);

  return null;
}
