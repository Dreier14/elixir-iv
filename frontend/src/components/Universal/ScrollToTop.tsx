import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (typeof window !== "undefined" && location.pathname !== prevPathname.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      prevPathname.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
